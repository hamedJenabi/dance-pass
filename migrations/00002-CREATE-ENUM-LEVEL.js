exports.up = async (sql) => {
  await sql`
		CREATE TYPE level AS ENUM (
		  'level_one',
		  'level_two',
		  'level_three',
		  'level_four',
		  'level_five',
		  'level_six'
	)
	`;
};

exports.down = async (sql) => {
  await sql`
		DROP TYPE level;
		`;
};
