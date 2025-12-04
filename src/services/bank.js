import { db } from "../db.js";
export const createAccountService = async (
  user_id,
  account_number,
  balance
) => {
  const response = await db.query(
    `INSERT INTO account (userid, number, balance) VALUES ($1, $2, $3) RETURNING *`,
    [user_id, account_number, balance]
  );
  return response.rows[0];
};
