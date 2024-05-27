import { loginPage } from "../../Pages/loginPage"
const loginObj = new loginPage
import login_TC001_TD from "../../fixtures/LoginTD/login_TC001_TD.json"

describe(' test automation',()=>{

    it('login flow',()=>{

        loginObj.openURL()
        loginObj.enterEmail(login_TC001_TD.email)
        loginObj.enterPassword(login_TC001_TD.password)
        loginObj.clickSubmit()
    })
})