import React from "react";

interface NavButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ label, isActive, onClick }) => {
  return (
    //simple button with active/inactive styles for navigation
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium ${
        isActive ? "bg-red-600 text-white" : "bg-gray-200 text-gray-900"
      }`}
    >
      {label}
    </button>
  );
};

export default NavButton;
