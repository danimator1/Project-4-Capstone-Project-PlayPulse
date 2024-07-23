-- settings.sql
CREATE DATABASE playpulse;
CREATE USER playpulseuser WITH PASSWORD 'playpulse';
GRANT ALL PRIVILEGES ON DATABASE playpulse TO playpulseuser;
ALTER DATABASE playpulse OWNER TO playpulseuser;