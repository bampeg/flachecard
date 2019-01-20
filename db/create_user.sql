INSERT INTO flachecard_users (user_name, user_email, hash)
  VALUES ($1, $2, $3)
RETURNING
  user_id, user_name, user_email;
