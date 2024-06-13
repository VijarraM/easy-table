-- CREATE DATABASE IF NOT EXISTS easyTabledb
SELECT 'CREATE DATABASE easyTabledb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'easyTabledb' )\gexec