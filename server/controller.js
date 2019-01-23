const { genSaltSync, hashSync, compareSync } = require("bcryptjs");

module.exports = {
  signup: async (req, res) => {
    let { name, email, password, confirmPassword } = req.body;
    const db = req.app.get("db");
    const foundUser = await db.find_user([email]);
    if (foundUser[0]) {
      return res
        .status(400)
        .send({ message: "An account with this email already exists." });
    }
    const salt = genSaltSync();
    const hash = hashSync(password, salt);
    let [{ user_id, user_name, user_email }] = await db.create_user([
      name,
      email,
      hash
    ]);
    req.session.user = { user_id, user_name, user_email };
    res.status(201).send({ user_name });
  }
};
