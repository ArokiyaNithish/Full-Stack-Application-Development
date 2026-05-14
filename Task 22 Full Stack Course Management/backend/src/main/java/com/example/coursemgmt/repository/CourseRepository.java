package com.example.coursemgmt.repository;

import com.example.coursemgmt.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Integer> {
}
