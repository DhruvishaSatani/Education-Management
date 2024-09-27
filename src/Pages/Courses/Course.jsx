import React, { useState } from 'react';

const Course = () => {
  // Mock data for 8 courses
  const mockCourses = [
    { id: 1, title: 'Mathematics', description: 'Learn Algebra and Geometry basics.', content: 'Mathematics Content' },
    { id: 2, title: 'Physics', description: 'Understand the fundamentals of Physics.', content: 'Physics Content' },
    { id: 3, title: 'Chemistry', description: 'Explore Chemical Reactions and Equations.', content: 'Chemistry Content' },
    { id: 4, title: 'Biology', description: 'Dive into the study of living organisms.', content: 'Biology Content' },
    { id: 5, title: 'History', description: 'Learn about the past events of the world.', content: 'History Content' },
    { id: 6, title: 'Geography', description: 'Study the physical features of Earth.', content: 'Geography Content' },
    { id: 7, title: 'Literature', description: 'Read and analyze classic works of literature.', content: 'Literature Content' },
    { id: 8, title: 'Computer Science', description: 'Learn programming and algorithms.', content: 'Computer Science Content' },
  ];

  // States for managing courses and role
  const [courses, setCourses] = useState(mockCourses);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isTeacher, setIsTeacher] = useState(true); // Change to `false` to simulate Student View

  // Temporary states for editing course details
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editContent, setEditContent] = useState('');

  // Handle selecting a course to view details
  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setEditTitle(course.title);
    setEditDescription(course.description);
    setEditContent(course.content);
  };

  // Handle course updates (Teacher View)
  const handleCourseUpdate = () => {
    const updatedCourses = courses.map((course) =>
      course.id === selectedCourse.id
        ? { ...course, title: editTitle, description: editDescription, content: editContent }
        : course
    );
    setCourses(updatedCourses);
    alert('Course updated successfully!');
  };

  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>

      {/* Courses List */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Available Courses</h2>
        <div className="bg-white shadow-md rounded-lg p-4 grid grid-cols-4 gap-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="p-4 bg-blue-100 rounded cursor-pointer hover:bg-blue-200"
              onClick={() => handleCourseSelect(course)}
            >
              <h3 className="font-bold">{course.title}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Course Details */}
      {selectedCourse && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Course Details</h2>

          {/* Student View: Display Course Details */}
          {!isTeacher ? (
            <div>
              <h3 className="text-lg font-bold mb-2">{selectedCourse.title}</h3>
              <p className="mb-4">{selectedCourse.description}</p>
              <div className="bg-gray-100 p-4 rounded">
                <h4 className="font-semibold mb-2">Course Content</h4>
                <p>{selectedCourse.content}</p>
              </div>
            </div>
          ) : (
            // Teacher View: Edit Course Details
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Course Title:</label>
                <input
                  className="border p-2 w-full rounded"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Course Description:</label>
                <textarea
                  className="border p-2 w-full rounded"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Course Content:</label>
                <textarea
                  className="border p-2 w-full rounded"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
              </div>

              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleCourseUpdate}
              >
                Update Course
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Course;
