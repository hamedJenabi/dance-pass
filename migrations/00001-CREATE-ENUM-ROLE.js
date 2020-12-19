exports.up = async (sql) => {
  await sql`
	  CREATE TYPE role AS ENUM (
		'leader',
		'follower',
		'switch',
		'null'
  )
  `;
};

exports.down = async (sql) => {
  await sql`
	  DROP TYPE role;
	  `;
};
