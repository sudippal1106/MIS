create table bga_details(
	BGAID int primary key auto_increment,
    ClientID int not null,
    Niagoscrub int not null,
    Examordering int not null,
    Doctyping int not null,
    Apsscrubbing int not null,
    Carrierscrub int not null,
    Submission int not null,
    DataEntry int not null,
	CreatedAt datetime default CURRENT_TIMESTAMP(),
	CreatedBy int,
	UpdatedAt datetime,
	UpdatedBy int,
    Foreign key(ClientID) references client_details(ClientID)
);


-- ALTER TABLE bga_details
-- ADD dataentry int;
    -- Foreign key(ClientID) references client_details(ClientID)