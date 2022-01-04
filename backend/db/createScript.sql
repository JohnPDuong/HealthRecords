CREATE DATABASE healthrecords;

CREATE TABLE Clients (
    ClientID SERIAL PRIMARY KEY,
    FName VARCHAR(100),
    LName VARCHAR(100),
    Email VARCHAR(100),
    Password VARCHAR(100),
    Salt VARCHAR(100)
);