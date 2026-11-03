package com.project.jobapplicationtracker.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="jobapplication")
@Setter
@Getter
public class Jobapplication {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	Integer sid;
	String companyname;
	String jobrole;
	String jobtype;
	String location;
	String applicationstatus;
	LocalDate applieddate;
	String jobdescription;
	String joburl;
	

}
