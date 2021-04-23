  class Valid {
      constructor(email, password, isValid) {
          this.email = email;
          this.password = password;
          this.isValid = isValid;

      }

      validate() {
          this.isValid = false;
          if (this.password.length > 6) {
              this.isValid = true;
          }
      }
  }

  export default Valid;