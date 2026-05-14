package com.example.coursemgmt.service;

import com.example.coursemgmt.entity.Course;
import com.example.coursemgmt.repository.CourseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    private final CourseRepository repository;

    public CourseService(CourseRepository repository) {
        this.repository = repository;
    }

    public List<Course> getAllCourses() {
        return repository.findAll();
    }

    public Course createCourse(Course course) {
        return repository.save(course);
    }

    public Course updateCourse(Integer id, Course updatedCourse) {
        Course existing = repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Course not found with id: " + id));

        existing.setTitle(updatedCourse.getTitle());
        existing.setInstructor(updatedCourse.getInstructor());
        existing.setDurationHours(updatedCourse.getDurationHours());
        return repository.save(existing);
    }

    public void deleteCourse(Integer id) {
        if (!repository.existsById(id)) {
            throw new IllegalArgumentException("Course not found with id: " + id);
        }
        repository.deleteById(id);
    }
}
