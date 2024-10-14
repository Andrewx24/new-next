import React from 'react';
import { User } from '@/lib/global';

interface UserProfileProps {
  user: User;  // Using the User interface for the props
}

const Userprofile: React.FC<UserProfileProps> = ({ user }) => {  // Destructure 'user' from props
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Userprofile;
