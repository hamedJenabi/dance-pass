exports.up = async (sql) => {
  await sql`
	CREATE TABLE tickets (
		id int PRIMARY KEY,
		name varchar,
		price int,
		class level,
		capacity int
	  );
  `;
};

exports.down = async (sql) => {
  await sql`
	  DROP TABLE tickets
	  `;
};
