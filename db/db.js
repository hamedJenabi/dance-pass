require("dotenv").config();
require("../extractHerokuDatabaseEnvVars")();
const argon2 = require("argon2");

const postgres = require("postgres");
const sql =
  process.env.NODE_ENV === "production"
    ? // Heroku needs SSL connections but
      // has an "unauthorized" certificate
      // https://devcenter.heroku.com/changelog-items/852
      postgres({ ssl: { rejectUnauthorized: false } })
    : postgres();

export async function insertUserAccount(user) {
  const userInfo = {
    email: user.email,
    first_name: user.firstName,
    last_name: user.lastName,
  };
  return sql`
    INSERT INTO users${sql(userInfo, "email", "first_name", "last_name")}
  RETURNING id
    `;
}

