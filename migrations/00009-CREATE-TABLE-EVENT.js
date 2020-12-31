exports.up = async (sql) => {
  await sql`
	  CREATE TABLE events (
		  id int PRIMARY KEY,
		  title VARCHAR,
		  sale_start timestamp,
		  sale_end timestamp
		);
	`;
};

exports.down = async (sql) => {
  await sql`
		DROP TABLE events
		`;
};
