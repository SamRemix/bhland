#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: Album
#------------------------------------------------------------

CREATE TABLE Album(
        id    Int  Auto_increment  NOT NULL ,
        cover Varchar (255) NOT NULL ,
        pike  Int ,
        name  Varchar (255) NOT NULL
	,CONSTRAINT Album_PK PRIMARY KEY (id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Music
#------------------------------------------------------------

CREATE TABLE Music(
        id       Int  Auto_increment  NOT NULL ,
        track    Int NOT NULL ,
        title    Varchar (255) NOT NULL ,
        id_Album Int NOT NULL
	,CONSTRAINT Music_PK PRIMARY KEY (id)

	,CONSTRAINT Music_Album_FK FOREIGN KEY (id_Album) REFERENCES Album(id) ON DELETE CASCADE
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: User
#------------------------------------------------------------

CREATE TABLE User(
        id       Int  Auto_increment  NOT NULL ,
        name     Varchar (255) NOT NULL ,
        email    Varchar (255) NOT NULL ,
        password Varchar (255) NOT NULL ,
        role     Varchar (255) NOT NULL
	,CONSTRAINT User_PK PRIMARY KEY (id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Rate
#------------------------------------------------------------

CREATE TABLE Rate(
        id       Int  Auto_increment  NOT NULL ,
        rate     Float NOT NULL ,
        id_User  Int NOT NULL ,
        id_Music Int NOT NULL
	,CONSTRAINT Rate_PK PRIMARY KEY (id)

	,CONSTRAINT Rate_User_FK FOREIGN KEY (id_User) REFERENCES User(id)
	,CONSTRAINT Rate_Music0_FK FOREIGN KEY (id_Music) REFERENCES Music(id)
)ENGINE=InnoDB;

