const bcrypt = require("bcrypt");
const uuid = require ('uuid')

const plainText = "hallo";
const compare = "hallo";

(async () => {
  try {

    const chiperText = await bcrypt.hash(plainText, 12);
    console.log("Hashed Password:", chiperText);

    const isTrue = await bcrypt.compare(compare, chiperText)
    console.log("Password match:", isTrue);

    if (isTrue) {
        console.log("Login successful");
        const token = uuid.v4
        console.log(token())
      } else {
        console.log("Login failed");
      }
  } catch (err) {
    console.error("Error", err);
  }
})();
