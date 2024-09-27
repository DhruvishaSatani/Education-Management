import React from 'react';

// Sample data for online courses
const courses = [
  {
    id: 1,
    title: 'Introduction to React',
    instructor: 'Jane Doe',
    duration: '4 weeks',
    price: '$99',
    status: 'Active',
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    instructor: 'John Smith',
    duration: '6 weeks',
    price: '$149',
    status: 'Active',
  },
  {
    id: 3,
    title: 'Web Development Bootcamp',
    instructor: 'Alice Johnson',
    duration: '8 weeks',
    price: '$199',
    status: 'Inactive',
  },
];

const CoursesList = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">All Online Courses</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Course Title</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Instructor</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Duration</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Price</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {courses.map((course) => (
            <tr key={course.id}>
              <td className="px-4 py-2 whitespace-nowrap">{course.title}</td>
              <td className="px-4 py-2 whitespace-nowrap">{course.instructor}</td>
              <td className="px-4 py-2 whitespace-nowrap">{course.duration}</td>
              <td className="px-4 py-2 whitespace-nowrap">{course.price}</td>
              <td className="px-4 py-2 whitespace-nowrap">
                <span className={`inline-flex text-xs font-semibold rounded-full px-2.5 py-0.5 ${course.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {course.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesList;
