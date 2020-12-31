exports.up = async (sql) => {
  await sql`
		CREATE TABLE add_on(
		id SERIAL PRIMARY KEY,
		title VARCHAR NOT NULL,
		description VARCHAR,
		capacity int	
	  )
	  `;
};

exports.down = async (sql) => {
  await sql`
		  DROP TABLE add_on
		  `;
};
