CREATE TABLE PROJECTS(
    projectId INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    projectTitle       VARCHAR(500) NOT NULL,
    projectDescription   VARCHAR(500) NOT NULL,
    ProjectTimeline       DATETIME,
    image           VARCHAR(1000),
    projectTitle    VARCHAR(500) NOT NULL
    priority    INTEGER DEFAULT 0,
    clientId    INTEGER NOT NULL,
    username    VARCHAR(500) NOT NULL,
    fullName    VARCHAR(500) NOT NULL,
    email   VARCHAR(500) NOT NULL,
    phone   INTEGER NOT NULL,
    FOREIGN KEY (clientId) REFERENCES CLIENTS(clientId)
);