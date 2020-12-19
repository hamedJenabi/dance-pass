import { insertUserAccount } from "../../db/db";
export default async function register(req, res) {
  console.log("req", req.body);
  const userToInsert = req.body;
  const userId = await insertUserAccount(userToInsert);
}
