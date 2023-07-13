create table client_details(
	ClientID int primary key auto_increment,
    Name varchar(20) not null,
    Description varchar(300),
	CreatedAt datetime default CURRENT_TIMESTAMP(),
	CreatedBy int,
	UpdatedAt datetime,
	UpdatedBy int
);