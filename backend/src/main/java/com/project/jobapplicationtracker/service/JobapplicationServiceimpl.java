package com.project.jobapplicationtracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.jobapplicationtracker.model.Jobapplication;
import com.project.jobapplicationtracker.repo.JobapplicationRepo;
@Service
public class JobapplicationServiceimpl implements JobapplicationService{
	@Autowired
	JobapplicationRepo jobapplicationRepo;

	@Override
	public Jobapplication createJobapplication(Jobapplication j) {
		
		return jobapplicationRepo.save(j);
	}

	@Override
	public List<Jobapplication> getAllJobapplications() {
		return jobapplicationRepo.findAll();
	}

	@Override
	public Jobapplication getJobapplicationById(Integer id) {
		return jobapplicationRepo.findById(id).orElse(null);
	}

	@Override
	public Jobapplication deleteJobapplication(Integer id) {
		
		
		Jobapplication j=jobapplicationRepo.findById(id).orElse(null);
		if(j!=null) {
			jobapplicationRepo.deleteById(id);
			
		}
		return j;
	}

	@Override
	public Jobapplication updateJobapplication(Jobapplication j,Integer id) {
		Jobapplication updatedJobApplication=jobapplicationRepo.findById(id).orElse(null);
		if(updatedJobApplication!=null) {
			updatedJobApplication.setApplicationstatus(j.getApplicationstatus());
			updatedJobApplication.setApplieddate(j.getApplieddate());
			updatedJobApplication.setCompanyname(j.getCompanyname());
			updatedJobApplication.setJobdescription(j.getJobdescription());
			updatedJobApplication.setJobrole(j.getJobrole());
			updatedJobApplication.setJobtype(j.getJobtype());
			updatedJobApplication.setJoburl(j.getJoburl());
			updatedJobApplication.setLocation(j.getLocation());
	
			
			jobapplicationRepo.save(updatedJobApplication);
			
		}
		
		return updatedJobApplication;
	}
	@Override
	public List<Jobapplication> getApplicationsByCompanyname(String companyname) {
	    return jobapplicationRepo.findByCompanyname(companyname);
	}

}
