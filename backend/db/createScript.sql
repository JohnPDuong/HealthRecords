CREATE DATABASE healthrecords;

CREATE TABLE Clients (
    ClientID SERIAL PRIMARY KEY,
    FName VARCHAR(100),
    LName VARCHAR(100)
);