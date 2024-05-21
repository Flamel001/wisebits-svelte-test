declare namespace Cypress {
    interface Chainable<Subject = any> {
        getByTestId(testid: string): Chainable<JQuery<HTMLElement>>;
    }
}
