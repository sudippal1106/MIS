create table task_report(
	TaskReportID int primary key auto_increment,
	EmpID bigint not null,
    ClientID int not null,
    ReportDate datetime not null,
    Description varchar(300),
	CreatedAt datetime default CURRENT_TIMESTAMP(),
	CreatedBy int,
	UpdatedAt datetime,
	UpdatedBy int,
    foreign key(ClientID) references client_details(ClientID),
    foreign key(EmpID) references employee_details(EmpID)
);