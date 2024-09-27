// // Profile.jsx
// import React, { useState } from 'react';

// const UserProfile = () => {
//   // Initial state for storing profile data
//   const [profiles, setProfiles] = useState([]);
//   const [currentProfile, setCurrentProfile] = useState({ id: null, name: '', email: '' });
//   const [editing, setEditing] = useState(false);

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentProfile({ ...currentProfile, [name]: value });
//   };

//   // Add new profile
//   const addProfile = () => {
//     if (currentProfile.name && currentProfile.email) {
//       setProfiles([...profiles, { ...currentProfile, id: profiles.length + 1 }]);
//       setCurrentProfile({ id: null, name: '', email: '' });
//     }
//   };

//   // Edit profile
//   const editProfile = (profile) => {
//     setEditing(true);
//     setCurrentProfile(profile);
//   };

//   // Update profile
//   const updateProfile = () => {
//     setProfiles(
//       profiles.map((profile) => (profile.id === currentProfile.id ? currentProfile : profile))
//     );
//     setEditing(false);
//     setCurrentProfile({ id: null, name: '', email: '' });
//   };

//   // Delete profile
//   const deleteProfile = (id) => {
//     setProfiles(profiles.filter((profile) => profile.id !== id));
//   };

//   return (
//     <div>
//       <h2>User Profile Management</h2>
//       <div style={{ marginBottom: '20px' }}>
//         <h3>{editing ? 'Edit Profile' : 'Add Profile'}</h3>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={currentProfile.name}
//           onChange={handleInputChange}
//           style={{ marginRight: '10px' }}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={currentProfile.email}
//           onChange={handleInputChange}
//           style={{ marginRight: '10px' }}
//         />
//         {editing ? (
//           <button onClick={updateProfile}>Update Profile</button>
//         ) : (
//           <button onClick={addProfile}>Add Profile</button>
//         )}
//       </div>

//       {/* Display list of profiles */}
//       <h3>All Profiles</h3>
//       <table border="1" cellPadding="10" cellSpacing="0">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {profiles.length > 0 ? (
//             profiles.map((profile) => (
//               <tr key={profile.id}>
//                 <td>{profile.id}</td>
//                 <td>{profile.name}</td>
//                 <td>{profile.email}</td>
//                 <td>
//                   <button onClick={() => editProfile(profile)} style={{ marginRight: '5px' }}>
//                     Edit
//                   </button>
//                   <button onClick={() => deleteProfile(profile.id)} style={{ color: 'red' }}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={4}>No profiles available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserProfile;

import React, { useState } from "react";
import {
  PencilIcon,
  MailIcon,
  PhoneIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

const UserProfile = () => {
  // const [profiles, setProfiles] = useState([]);
//     const [currentProfile, setCurrentProfile] = useState({ id: null, name: '', email: '' });
//     const [editing, setEditing] = useState(false);

//       // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentProfile({ ...currentProfile, [name]: value });
//   };


//       // Edit profile
//   const editProfile = (profile) => {
//     setEditing(true);
//     setCurrentProfile(profile);
//   };

//   // Update profile
//   const updateProfile = () => {
//     setProfiles(
//       profiles.map((profile) => (profile.id === currentProfile.id ? currentProfile : profile))
//     );
//     setEditing(false);
//     setCurrentProfile({ id: null, name: '', email: '' });
//   };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Profile Header */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center space-x-6">
          {/* Profile Picture */}
          <UserCircleIcon className="h-20 w-20 text-gray-400" />

          {/* User Information */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-700">John Doe</h1>
            <p className="text-gray-500">Admin</p>
          </div>

          {/* Edit Button */}
          <button
            className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center
           hover:bg-blue-600"
          >
            <PencilIcon className="h-5 w-5 mr-2" />
            Edit Profile
          </button>
          
        </div>
      </div>

      {/* Profile Details Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Personal Information Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <MailIcon className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">johndoe@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">+1 234 567 890</span>
            </div>
            <div className="flex items-center space-x-2">
              <UserCircleIcon className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">Username: johndoe</span>
            </div>
          </div>
        </div>

        {/* Account Settings Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
          <div className="space-y-2">
            <div>
              <span className="text-gray-500">Change Password</span>
              <button className="ml-auto text-blue-500 hover:text-blue-700">
                Update
              </button>
            </div>
            <div>
              <span className="text-gray-500">Two-factor Authentication</span>
              <button className="ml-auto text-blue-500 hover:text-blue-700">
                Enable
              </button>
            </div>
            <div>
              <span className="text-gray-500">Email Notifications</span>
              <button className="ml-auto text-blue-500 hover:text-blue-700">
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* User Activity Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <ul className="list-disc ml-4 space-y-2">
            <li className="text-gray-700">Logged in from Chrome on Windows.</li>
            <li className="text-gray-700">Updated profile information.</li>
            <li className="text-gray-700">Changed password last week.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
