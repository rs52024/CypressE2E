export class loginPage{

    weblocator={
            email : '#email',
            password : '#pass',
            loginBtn : 'u_0_5_lo'
    }

    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    enterEmail(Email){
        cy.get(this.weblocator.email).type(Email)
    }

    enterPassword(pass){
        cy.get(this.weblocator.password).type(pass)
    }

    clickSubmit(){
        cy.get(this.weblocator.loginBtn).click()
    }
}