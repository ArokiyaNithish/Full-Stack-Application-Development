CREATE DATABASE coursedb;
GO

USE coursedb;
GO

CREATE TABLE courses (
    id INT IDENTITY(1,1) PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    instructor VARCHAR(100) NOT NULL,
    duration_hours INT NOT NULL CHECK (duration_hours > 0)
);
GO

INSERT INTO courses (title, instructor, duration_hours)
VALUES
('Spring Boot Basics', 'Nithish', 12),
('React Fundamentals', 'Arun', 10),
('SQL Server for Developers', 'Priya', 8);
GO

SELECT * FROM courses;
