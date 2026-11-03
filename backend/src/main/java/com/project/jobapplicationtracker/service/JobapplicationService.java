package com.project.jobapplicationtracker.service;

import java.util.List;

import com.project.jobapplicationtracker.model.Jobapplication;

public interface JobapplicationService {
	Jobapplication createJobapplication(Jobapplication j);
	List<Jobapplication> getAllJobapplications();
	Jobapplication getJobapplicationById(Integer id);
	Jobapplication deleteJobapplication(Integer id);
	Jobapplication updateJobapplication(Jobapplication j,Integer id);
	List<Jobapplication> getApplicationsByCompanyname(String companyname);

}
