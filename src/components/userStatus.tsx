import React from "react";

interface UserStatusProps {
  user: {
    isLoggedIn: boolean;
    firstName?: string;
    lastName?: string;
  };
}

const UserStatus: React.FC<UserStatusProps> = ({ user }) => {
  const getInitials = () => {
    if (user.isLoggedIn) {
      // If the user is logged in, display their initials
      const { firstName, lastName } = user;
      return firstName?.charAt(0) + lastName?.charAt(0);
    } else {
      // If the user is not logged in, display "Login"
      return "Login";
    }
  };

  return (
    <div className="user-status">
      <span>{getInitials()}</span>
    </div>
  );
};

export default UserStatus;
