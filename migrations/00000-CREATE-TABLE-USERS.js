exports.up = async (sql) => {
  await sql`
  CREATE TABLE accounts(
  id SERIAL PRIMARY KEY,
  email varchar(255) NOT NULL,
  password_hash varchar(255) NOT NULL,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  created_at timestamp,
  class_id int
)
`;
};

exports.down = async (sql) => {
  await sql`
	DROP TABLE accounts
	`;
};
