import React from 'react';

const SearchModal = ({
  isOpen,
  onClose,
  searchQuery,
  setSearchQuery,
  suggestions,
  handleSuggestionClick,
  handleSearchChange, // Accept the search change handler
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-11/12 max-w-lg p-5 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Search Products</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange} // Use the passed handler
          placeholder="Search products..."
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        />
        <ul className="max-h-60 overflow-y-auto">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion.id)}
              className="p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
            >
              {suggestion.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchModal;
