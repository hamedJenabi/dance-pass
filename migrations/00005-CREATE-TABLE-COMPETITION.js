exports.up = async (sql) => {
  await sql`
	  CREATE TABLE competitions(
	  id SERIAL PRIMARY KEY,
	  title VARCHAR NOT NULL,
	  description VARCHAR, 
	  time VARCHAR, 
	  price int NOT NULL,
	  ledear_capacity int,
	  follower_capacity int,
	  solo_capacity int
	)
	`;
};

exports.down = async (sql) => {
  await sql`
		DROP TABLE competitions
		`;
};
