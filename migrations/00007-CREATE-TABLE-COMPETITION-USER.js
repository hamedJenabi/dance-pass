exports.up = async (sql) => {
	await sql`
	  CREATE TABLE competition_user(
	  id SERIAL PRIMARY KEY,
	  user_id int,
	  competition_id int
	)
	`;
  };
  
  exports.down = async (sql) => {
	await sql`
		DROP TABLE competition_user
		`;
  };
  