class ModelFactory {
  constructor() {
    this.createModel = function (type) {
      let model;
      if (type === "user") model = new UserModel();
      else if (type === "checkout") model = new CheckoutModel();

      model.getOne = function () {
        return `Query one ${type} from database`;
      };

      return model;
    };
  }
}

class UserModel {
  constructor() {
    this._type = "user";
    this.signin = function () {
      return "send a JWT to the client";
    };
  }
}

class CheckoutModel {
  constructor() {
    this._type = "checkout";
    this.tappay = function () {
      return "Completed TapPay transaction";
    };
  }
}

// creating objects
const factory = new ModelFactory();

const myUserModel = factory.createModel("user");
const mycheckoutModel = factory.createModel("checkout");

console.log(myUserModel.getOne());
console.log(mycheckoutModel.getOne());
console.log(myUserModel.signin());
console.log(mycheckoutModel.tappay());
