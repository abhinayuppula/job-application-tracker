package com.project.jobapplicationtracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.jobapplicationtracker.model.Jobapplication;
import com.project.jobapplicationtracker.service.JobapplicationService;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/jobapplication")
public class JobapplicationController {
	@Autowired
	JobapplicationService jobapplicationService;
	@PostMapping("/insert")
	Jobapplication createJobapplication(@RequestBody Jobapplication j) {
		
		return jobapplicationService.createJobapplication(j);
	}
	@GetMapping("/hello")
	String hello() {
		return "hello from JobapplicationController";
	}
	@GetMapping("/getAllApplications")
	List<Jobapplication> getAllApplications() {
		return jobapplicationService.getAllJobapplications();
	}
	@GetMapping("/getApplicationById/{id}")
	Jobapplication getApplicationById(@PathVariable Integer id) {
		return jobapplicationService.getJobapplicationById(id);
	}
	@DeleteMapping("/deleteApplicationById/{id}")
	Jobapplication deleteApplicationById(@PathVariable Integer id) {
		return jobapplicationService.deleteJobapplication(id);
	}
	@GetMapping("/getApplicationBycompanyname/{companyname}")
	List<Jobapplication> getApplicationsByCompanyname(@PathVariable String companyname) {
		return jobapplicationService.getApplicationsByCompanyname(companyname);
	}
	@PutMapping("/updateApplicationId/{id}")
	Jobapplication updateApplicationId(@RequestBody Jobapplication j,@PathVariable Integer id) {	
		return jobapplicationService.updateJobapplication(j, id);
	}
	
	

}
