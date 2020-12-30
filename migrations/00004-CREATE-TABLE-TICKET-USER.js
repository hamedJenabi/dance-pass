exports.up = async (sql) => {
  await sql`
	CREATE TABLE ticket_user(
	id SERIAL PRIMARY KEY,
	user_id int,
	ticket_id int
  )
  `;
};

exports.down = async (sql) => {
  await sql`
	  DROP TABLE ticket_user
	  `;
};
