// src/components/atoms/SearchInput.tsx
import React from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = "Search...",
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full p-2 mb-4 border rounded-md border-gray-300 focus:border-red-500 focus:outline-none transition-colors"
    />
  );
};

export default SearchInput;
