CREATE TABLE CLIENTS(
    clientId INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(500) NOT NULL,
    fullName VARCHAR(500) NOT NULL,
    address VARCHAR(500) NOT NULL,
    email VARCHAR(500) NOT NULL,
    img VARCHAR(1000),
    phone INTEGER NOT NULL,
    meetingID INTEGER NOT NULL,
    meetingDate DATETIME,
    meetingTime DATETIME,
    meetingSubject VARCHAR(500) NOT NULL,
    projectId INTEGER NOT NULL,
    projectTitle VARCHAR(500) NOT NULL,
    FOREIGN KEY (projectId) REFERENCES RPOJECTS(projectId),
    FOREIGN KEY (meetingId) REFERENCES MEETINGS(meetingId)
);
