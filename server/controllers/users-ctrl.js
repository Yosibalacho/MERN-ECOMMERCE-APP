const userModel = require("../models/users-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validateRegister = require("../validation/register");
const validateLogin = require("../validation/login");
const key = process.env.SECRET_KEY;

const register = async (req, res) => {
  const { isValid, errors } = validateRegister(req.body.user);
  if (!isValid) return res.status(400).json(errors);
  userModel.findOne({ email: req.body.user.email }, (err, user) => {
    if (err) return res.status(400).json(err);
    if (user) return res.json({ massage: "email already taken" });
    bcrypt
      .genSalt()
      .then((salt) => {
        bcrypt
          .hash(req.body.user.password, salt)
          .then(async (hashPassword) => {
            req.body.user.password = hashPassword;
            await userModel
              .insertMany(req.body.user)
              .then(() => res.json({ massage: "success" }))
              .catch((err) => res.json(err));
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const login = async (req, res) => {
  const { isValid, errors } = validateLogin(req.body.user);
  if (!isValid) return res.status(400).json(errors);
  const email = req.body.user.email;
  const password = req.body.user.password;
  await userModel.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).json({ emailNotFound: "Email not found" });
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name,
          email: user.email,
        };
        jwt.sign(payload, key, { expiresIn: 31556926 }, (err, token) => {
          if (err) return res.status(400).json({ err, message: "balala" });
          res.json({ success: true, token: `Bearer ${token}` });
        });
      } else {
        return res
          .status(400)
          .json({ passwordIncorrect: "Password incorrect" });
      }
    });
  });
};

const getUsers = async (req, res) => {
  await userModel.find({}).then((result, err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err });
    }
    if (result.length == 0) {
      return res.json({ success: false, message: "no data" });
    }
    if (result) {
      return res.status(200).json({ success: true, message: result });
    }
  });
};

module.exports = {
  register,
  login,
  getUsers,
};