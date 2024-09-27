import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Teacher = () => {
  const defaultGrades = [
    { id: 1, name: "Alice", subject: "Math", grade: "A" },
    { id: 2, name: "Bob", subject: "Science", grade: "B" },
    { id: 3, name: "Charlie", subject: "History", grade: "C" },
  ];
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [grades, setGrades] = useState([]);
  const [progress, setProgress] = useState({});
  const [grade, setGrade] = useState(defaultGrades);
  const [isEditing, setIsEditing] = useState(false);
  const [currentGrade, setCurrentGrade] = useState({
    id: null,
    name: "",
    subject: "",
    grade: "",
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentGrade((prevGrade) => ({
      ...prevGrade,
      [name]: value,
    }));
  };

  // Handle Add/Edit Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      // Edit an existing grade
      setGrades(
        grades.map((grade) =>
          grade.id === currentGrade.id ? currentGrade : grade
        )
      );
    } else {
      // Add a new grade
      setGrades([
        ...grades,
        { ...currentGrade, id: grades.length + 1 },
      ]);
    }
    setIsEditing(false);
    setCurrentGrade({ id: null, name: "", subject: "", grade: "" });
  };

  // Handle Delete Grade
  const handleDelete = (id) => {
    setGrades(grades.filter((grade) => grade.id !== id));
  };

  // Handle Edit Button Click
  const handleEdit = (grade) => {
    setIsEditing(true);
    setCurrentGrade(grade);
  };

  // Fetch Students and Courses Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentsResponse = await axios.get('https://api.example.com/students'); // Replace with your API endpoint
        const coursesResponse = await axios.get('https://api.example.com/courses'); // Replace with your API endpoint
        setStudents(studentsResponse.data);
        setCourses(coursesResponse.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const handleAssignCourse = async () => {
    try {
      await axios.post('https://api.example.com/assign-course', {
        studentId: selectedStudent,
        courseId: selectedCourse,
      });
      alert('Course assigned successfully');
    } catch (err) {
      console.error(err);
      alert('Error assigning course');
    }
  };

  const handleGradeStudent = async (studentId) => {
    const grade = prompt('Enter the grade for the student:');
    if (grade) {
      try {
        await axios.post('https://api.example.com/assign-grade', {
          studentId,
          grade,
        });
        alert('Grade assigned successfully');
        // Update local grades state
        setGrades((prev) => ({
          ...prev,
          [studentId]: grade,
        }));
      } catch (err) {
        console.error(err);
        alert('Error assigning grade');
      }
    }
  };

  const handleViewProgress = (studentId) => {
    // This function should fetch and display the student's progress
    // For now, we will just show an alert with the current grade
    const studentGrade = grades[studentId] || 'No grade assigned yet';
    alert(`Current Grade: ${studentGrade}`);
  };



  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>

      {/* Assign Course Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Assign New Course</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          <select
            className="border rounded-md p-2 mr-2"
            onChange={(e) => setSelectedStudent(e.target.value)}
          >
            <option value="">Sele</option>
            <option value="">na</option>
            <option value="">Sel</option>

            {students.map((student) => (
              <option key={student.id} value={student.id}>
                {student.name}
              </option>
            ))}
          </select>
          <select
            className="border rounded-md p-2 mr-2"
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
          </select>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleAssignCourse}
          >
            Assign Course
          </button>
        </div>
      </div>

      {/* Student Progress Section */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Student Progress</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          <ul>
            {students.map((student) => (
              <li key={student.id} className="py-2 border-b last:border-b-0 flex justify-between items-center">
                {student.name}
                <div>
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => handleViewProgress(student.id)}
                  >
                    View Progress
                  </button>
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                    onClick={() => handleGradeStudent(student.id)}
                  >
                    Grade Student
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h1 className='text-xl font-semibold m-3'>Teacher Page: Student Grades</h1>

      {/* Grade List Table */}
      <table border="1" style={{ width: "60%", margin: "20px auto" }}  >
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {grade.length > 0 ? (
            grade.map((gradee) => (
              <tr key={gradee.id}>
                <td>{gradee.name}</td>
                <td>{gradee.subject}</td>
                <td>{gradee.grade}</td>
                <td>
                  <button onClick={() => handleEdit(gradee)}>Edit</button>
                  <button onClick={() => handleDelete(gradee.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No grades available.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Add/Edit Form */}
      <h2 className='font-semibold text-2xl mb-3'>{isEditing ? "Edit Grade" : "Add New Grade"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={currentGrade.name}
          onChange={handleChange}
          placeholder="Student Name"
          required
          className='p-2  m-2 border border-gray-600 rounded-md outline-none'
        />
        <input
          type="text"
          name="subject"
          value={currentGrade.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
           className='p-2  m-2 border border-gray-600 rounded-md outline-none'
        />
        <input
          type="text"
          name="grade"
          value={currentGrade.grade}
          onChange={handleChange}
          placeholder="Grade (e.g., A, B, C)"
          required
           className='p-2  m-2 border border-gray-600 rounded-md outline-none'
        />
        <button type="submit" className='underline'>{isEditing ? "Update Grade" : "Add Grade"}</button>
        {isEditing && <button onClick={() => setIsEditing(false)}>Cancel</button>}
      </form>

      
    </div>
  );
};

export default Teacher;
