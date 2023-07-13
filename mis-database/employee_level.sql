create table employee_levels(
	LevelID int primary key auto_increment,
    Name varchar(20) not null,
	CreatedAt datetime default CURRENT_TIMESTAMP(),
	CreatedBy int,
	UpdatedAt datetime,
	UpdatedBy int
);