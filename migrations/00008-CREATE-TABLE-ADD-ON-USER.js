exports.up = async (sql) => {
  await sql`
	  CREATE TABLE add_on_user(
	  id SERIAL PRIMARY KEY,
	  user_id int,
	  add_on_id int
	)
	`;
};

exports.down = async (sql) => {
  await sql`
		DROP TABLE add_on_user
		`;
};
