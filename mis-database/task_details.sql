create table task_details(
	TaskDetailID int primary key auto_increment,
    TaskReportID int not null,
	CreatedAt datetime default CURRENT_TIMESTAMP(),
	CreatedBy int,
	UpdatedAt datetime,
	UpdatedBy int,
    foreign key(TaskReportID) references task_report(TaskReportID)
);