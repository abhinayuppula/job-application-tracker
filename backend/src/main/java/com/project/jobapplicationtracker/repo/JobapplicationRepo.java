package com.project.jobapplicationtracker.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.jobapplicationtracker.model.Jobapplication;
@Repository
public interface JobapplicationRepo extends JpaRepository<Jobapplication,Integer> {
	List<Jobapplication> findByCompanyname(String companyname);
	

}
