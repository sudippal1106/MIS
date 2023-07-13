create table bga_details(
	BGAID int primary key auto_increment,
    Niagoscrub varchar(40) not null,
    Examordering varchar(40) not null,
    Doctyping varchar(40) not null,
    Apsscrubbing varchar(40) not null,
    Carrierscrub varchar(40) not null,
    Submission varchar(40) not null,
    DataEntry int,
    ClientID int,
	CreatedAt datetime default CURRENT_TIMESTAMP(),
	CreatedBy int,
	UpdatedAt datetime,
	UpdatedBy int,
    Foreign key(ClientID) references client_details(ClientID)
);


-- ALTER TABLE bga_details
-- ADD dataentry int;
    -- Foreign key(ClientID) references client_details(ClientID)