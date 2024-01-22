const {Schema, model} = require("mongoose");

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: [true, "Full Name is Required"],
    },
    email: {
      type: String,
      required: [true, "Email Address is Required"],
      min: 8,
      max: 1078,
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
  },
  { timestamps: true }
);


const User = model("user", userSchema);

module.exports = User;