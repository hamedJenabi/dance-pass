exports.up = async (sql) => {
  await sql`
  CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  email varchar(255) NOT NULL,
  password_hash varchar(255),
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  country varchar(255),
  role varchar(255),
  created_at timestamp,
  class_id int
)
`;
};

exports.down = async (sql) => {
  await sql`
	DROP TABLE users
	`;
};
