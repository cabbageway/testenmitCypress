import CountermitProps from "../../src/Components/Counter/CountermitProps";

describe("CounterAPP", ()=> {
    it("was ich testen will", () => {

    })
    it("should increment the count", () => {
        // besuche Seite
        cy.visit("http://localhost:3000");
     //   cy.visit("http://localhost:3001");

        // holen den Button
        cy.get("#increment").click();
        // überprüfen ob 1 erhalten
        cy.get("#count").contains(1);
    })

    describe('Text Input Test', () => {
        it('should type into the text input', () => {
            // Besuchen Sie die React-Anwendung
            cy.visit('http://localhost:3000'); // Ändern Sie dies entsprechend Ihrer Anwendung

            // Verwenden Sie eine benutzerdefinierte Cypress-Befehlskette, um auf das Texteingabefeld zuzugreifen
            cy.get('#textInput').type('Hello, Cypress!').should('have.value', 'Hello, Cypress!');
            cy.get('#copyValue').should('have.value', 'Hello, Cypress!');
        });
    });

    it("5 + 7 ", () => {
        cy.visit("http://localhost:3000");
        cy.get("#wert1").type('21').should('have.value', '21');;
        cy.get("#wert2").type('15').should('have.value', '15');
        cy.get("#btn").click();
        cy.get("#result").should('have.value', '36');;

    })



   /*  it("Rufe Stimmabgabe ", () => {
        cy.visit("http://localhost:3000");
        cy.get("#wahlAufruf").click();


    })  */
})
// für Typescript
export {}