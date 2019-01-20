DROP TABLE IF EXISTS flachecard_users;
CREATE TABLE IF NOT EXISTS flachecard_users (
    user_id SERIAL PRIMARY KEY,
    user_name text,
    user_email text,
    hash text
);
