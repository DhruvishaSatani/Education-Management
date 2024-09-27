import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  // Mock data for courses
  const courses = [
    { id: 1, title: 'Mathematics', updated: '2024-09-25', popularity: 25 },
    { id: 2, title: 'Physics', updated: '2024-09-20', popularity: 15 },
    { id: 3, title: 'Chemistry', updated: '2024-09-22', popularity: 20 },
    { id: 4, title: 'Biology', updated: '2024-09-19', popularity: 10 },
    { id: 5, title: 'History', updated: '2024-09-21', popularity: 12 },
    { id: 6, title: 'Geography', updated: '2024-09-24', popularity: 18 },
    { id: 7, title: 'Literature', updated: '2024-09-23', popularity: 8 },
    { id: 8, title: 'Computer Science', updated: '2024-09-26', popularity: 30 },
  ];

  // Mock data for students
  const students = [
    { id: 1, name: 'John Doe', course: 'Mathematics' },
    { id: 2, name: 'Jane Smith', course: 'Physics' },
    { id: 3, name: 'Alice Johnson', course: 'Chemistry' },
    { id: 4, name: 'Bob Brown', course: 'Computer Science' },
    { id: 5, name: 'Eve White', course: 'History' },
  ];

  // Notifications for recently updated courses
  const recentUpdates = courses.filter(course => new Date(course.updated) > new Date('2024-09-20'));

  // Data for the pie chart
  const pieData = {
    labels: courses.map(course => course.title),
    datasets: [
      {
        label: 'Course Popularity',
        data: courses.map(course => course.popularity),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#FF6F61',
          '#C9CBCF',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#FF6F61',
          '#C9CBCF',
        ],
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Courses Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">All Courses</h2>
        <div className="grid grid-cols-4 gap-4">
          {courses.map(course => (
            <div key={course.id} className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="font-bold text-blue-600">{course.title}</h3>
              <p>Last Updated: {course.updated}</p>
              <p>Popularity: {course.popularity}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Recent Updates</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          {recentUpdates.length > 0 ? (
            <ul>
              {recentUpdates.map(course => (
                <li key={course.id} className="border-b py-2 last:border-b-0">
                  <span className="font-bold">{course.title}</span> was updated on {course.updated}.
                </li>
              ))}
            </ul>
          ) : (
            <p>No recent updates.</p>
          )}
        </div>
      </div>

      {/* Students Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Students Enrolled</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          {students.length > 0 ? (
            <ul>
              {students.map(student => (
                <li key={student.id} className="border-b py-2 last:border-b-0">
                  <span className="font-bold">{student.name}</span> is enrolled in {student.course}.
                </li>
              ))}
            </ul>
          ) : (
            <p>No students enrolled.</p>
          )}
        </div>
      </div>

      {/* Pie Chart for Popular Courses */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Most Popular Courses</h2>
        <div className=" w-[600px] h-[600px] bg-white shadow-md rounded-lg p-6">
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


// import React from 'react'
// import CoursesList from './Courses/CoursesList'

// const Dashboard = () => {
//   return (
//     <div>
//          <h1 className="text-2xl font-bold m-3">Welcome to Vedantu!</h1>
//          <CoursesList/>

//     </div>
//   )
// }

// export default Dashboard




