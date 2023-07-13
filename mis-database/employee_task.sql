create table employee_tasks(
	TaskID int primary key auto_increment,
    Name varchar(20) not null,
    Duration int not null,
	CreatedAt datetime default CURRENT_TIMESTAMP(),
	CreatedBy int,
	UpdatedAt datetime,
	UpdatedBy int
);