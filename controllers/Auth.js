const { User } = require("../models");
const jwt = require("jsonwebtoken");
const { extractToken } = require("../helpers/auth");

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    if(user){
      const token = jwt.sign({ id: user.id, email: user.email }, 'kunci');
      res.json({
        'token': token,
        'message': 'Berhasil login'
      });
    } else {
      throw('User tidak ditemukan');
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

exports.verify = async (req, res, next) => {
  try {
    const token = extractToken(req);
    var decoded = jwt.verify(token, 'kunci');
    const user = await User.findOne({
      where: {
        id: decoded.id,
      },
    });
    if(user){
      req.currentUser = decoded;
      next();
    } else {
      throw('User tidak ditemukan');
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};
