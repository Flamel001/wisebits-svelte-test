const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');

function getPath(...pathParts) {
    return path.resolve(__dirname, ...pathParts);
}
module.exports = (env) => {
    const isDev = !!(env && env.development);

    console.log('isDevelopment Mode: ', isDev);

    return {
        entry: {
            app: getPath('src', 'main.ts')
        },

        output: {
            path: getPath('public', 'build'),
            filename: isDev ? '[name].js' : '[name].[contenthash].js',
            chunkFilename: isDev ? '[name].js' : '[name].[contenthash].js'
        },

        optimization: {
            minimize: !isDev,
            minimizer: ['...', new CssMinimizerPlugin()],
            usedExports: true,
            splitChunks: {
                chunks: 'all',
                name: (module, chunks, cacheGroupKey) => {
                    const allChunksNames = chunks.map((chunk) => chunk.name).join('_');
                    const prefix =
                        cacheGroupKey === 'defaultVendors' ? 'vendors' : cacheGroupKey;
                    return `${prefix}_${allChunksNames}`;
                }
            },
            runtimeChunk: { name: 'runtime' }
        },

        resolve: {
            alias: {
                svelte: getPath('node_modules', 'svelte'),
                src: getPath('src'),
                shared: getPath('src', 'shared'),
                entities: getPath('src', 'entities'),
                features: getPath('src', 'features'),
                '@variables': getPath('src', 'shared', 'variables.less')
                // entities: getPath('src/entities')
            },
            extensions: ['.ts', '.mjs', '.js', '.css', '.svelte', '.less'],
            mainFields: ['svelte', 'browser', 'module', 'main']
        },

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: isDev,
                        context: getPath(),
                        configFile: getPath('tsconfig.json')
                    }
                },
                {
                    test: /\.svelte$/,
                    loader: 'svelte-loader',
                    options: {
                        compilerOptions: {
                            dev: isDev
                        },

                        emitCss: true,
                        hotReload: isDev,
                        preprocess: require('svelte-preprocess')({})
                    }
                },
                {
                    // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
                    test: /node_modules\/svelte\/.*\.mjs$/,
                    resolve: {
                        fullySpecified: false
                    }
                },
                {
                    test: /\.css$/,
                    sideEffects: true, // So we don't remove global css
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: isDev
                            }
                        }
                    ]
                },
                {
                    test: /\.less$/i,
                    use: [
                        // compiles Less to CSS
                        'style-loader',
                        'css-loader',
                        'less-loader'
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    loader: 'file-loader',
                    options: {
                        name: isDev ? '[name].[ext]' : '[name].[contenthash].[ext]',
                        outputPath: 'image'
                    }
                }
            ]
        },

        plugins: [
            new ForkTsCheckerWebpackPlugin({
                typescript: { configFile: getPath('tsconfig.json') }
            }),
            new HtmlWebpackPlugin({
                template: getPath('src', 'index.html'),
                favicon: getPath('src', 'favicon.png')
            }),
            new MiniCssExtractPlugin({
                filename: isDev ? '[name].css' : '[name].[contenthash].css',
                chunkFilename: isDev ? '[name].css' : '[name].[contenthash].css'
            })
        ],

        mode: isDev ? 'development' : 'production',
        devtool: isDev ? 'source-map' : false,
        devServer: {
            hot: true,
            compress: true,
            port: 9000
        }
    };
};
