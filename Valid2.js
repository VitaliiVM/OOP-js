
import Valid from "./Valid.js";

class Valid2  extends Valid{
    constructor(email, password, isValid,emailError, passwordError) {
        super(email, password, isValid);
        this.emailError = emailError;
        this.passwordError = passwordError;
    }

    validate() {
        super.validate();
        if (this.email === "") {
            this.emailError = "email empty";
            this.isValid = false;
        } else if (this.email.length < 12) {
            this.emailError = "min length 12";
        } else {
            this.emailError = "email-good";
        }
        if (this.password < 6){
            this.passwordError = "min length 6";
            this.isValid = false;
        } else {
            this.passwordError = "Password-good";
        }
    }
}
export default Valid2;
