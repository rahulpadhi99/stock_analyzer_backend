import User from "../models/user.js";
import bcrypt from "bcrypt";

export const login = (req, res, next) => {
  const userID = req?.body?.userID;
  const password = req?.body?.password;

  User.findOne({ userID: userID }).then((user) => {
    if (user) {
      return bcrypt
        .compare(password, user?.password)
        .then((isEqual) => {
          if (!isEqual) {
            res.status(401).json({ message: "Invalid Password" });
          } else {
            res.status(200).json({
              message: "user authenticated successfully",
              userID: user?._id,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return bcrypt
        .hash(password, 12)
        .then((hashedPassword) => {
          const user = new User({
            userID: userID,
            password: hashedPassword,
          });
          return user.save();
        })
        .then((user) => {
          res.status(200).json({
            message: "user registered successfully",
            userID: user?._id,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
};
