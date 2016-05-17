PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS owners (
  id INTEGER ASC, 
  name VARCHAR(50),
  email VARCHAR(50),
  ps4games VARCHAR(30),
  ps3games VARCHAR(30),
  xboxgames VARCHAR(30),
  threesixtygames VARCHAR(30)
);
