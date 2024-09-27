import React, { useState } from 'react';

const Students = () => {
  // Mock data for courses and assignments
  const mockCourses = [
    { id: 1, title: 'Mathematics', description: 'Algebra and Geometry' },
    { id: 2, title: 'Science', description: 'Physics and Chemistry' },
    { id: 3, title: 'History', description: 'World History and Events' },
  ];

  const mockAssignments = [
    { id: 1, courseId: 1, title: 'Algebra Worksheet', dueDate: '2024-10-15', submitted: false },
    { id: 2, courseId: 2, title: 'Physics Lab Report', dueDate: '2024-10-18', submitted: false },
    { id: 3, courseId: 3, title: 'History Essay', dueDate: '2024-10-20', submitted: false },
  ];

  const mockGrades = [
    { id: 1, courseId: 1, assignmentTitle: 'Algebra Worksheet', grade: 'A' },
    { id: 2, courseId: 2, assignmentTitle: 'Physics Lab Report', grade: 'B+' },
    { id: 3, courseId: 3, assignmentTitle: 'History Essay', grade: 'A-' },
  ];

  const [selectedCourse, setSelectedCourse] = useState(mockCourses[0].id);
  const [assignments, setAssignments] = useState(mockAssignments);
  const [grades] = useState(mockGrades);

  // Handle assignment submission
  const handleAssignmentSubmit = (assignmentId) => {
    const updatedAssignments = assignments.map((assignment) =>
      assignment.id === assignmentId ? { ...assignment, submitted: true } : assignment
    );
    setAssignments(updatedAssignments);
    alert('Assignment submitted successfully!');
  };

  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>

      {/* Course Selection */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Courses</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          <ul className="flex">
            {mockCourses.map((course) => (
              <li
                key={course.id}
                className={`py-2 px-4 rounded cursor-pointer mr-4 ${
                  selectedCourse === course.id ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
                onClick={() => setSelectedCourse(course.id)}
              >
                {course.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Display Selected Course Details */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Course Details</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          {mockCourses
            .filter((course) => course.id === selectedCourse)
            .map((course) => (
              <div key={course.id}>
                <h3 className="text-lg font-bold">{course.title}</h3>
                <p>{course.description}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Assignments Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Assignments</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          <ul>
            {assignments
              .filter((assignment) => assignment.courseId === selectedCourse)
              .map((assignment) => (
                <li
                  key={assignment.id}
                  className="py-2 border-b last:border-b-0 flex justify-between items-center"
                >
                  <div>
                    <h4 className="font-semibold">{assignment.title}</h4>
                    <p>Due: {assignment.dueDate}</p>
                  </div>
                  {assignment.submitted ? (
                    <span className="text-green-500">Submitted</span>
                  ) : (
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                      onClick={() => handleAssignmentSubmit(assignment.id)}
                    >
                      Submit Assignment
                    </button>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* Grades Section */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Grades</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          <ul>
            {grades
              .filter((grade) => grade.courseId === selectedCourse)
              .map((grade) => (
                <li key={grade.id} className="py-2 border-b last:border-b-0">
                  {grade.assignmentTitle}: <span className="font-bold">{grade.grade}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Students;
