create table employee_shiftTime(
	ShiftTimeID int primary key auto_increment,
    Name varchar(20) not null,
    ShiftTimeFrom time not null,
    ShiftTimeTo time not null,
	CreatedAt datetime default CURRENT_TIMESTAMP(),
	CreatedBy int,
	UpdatedAt datetime,
	UpdatedBy int
);