import React, { useState } from "react";

const initialDataArray1 = [
  { title: "The Grand Adventure", date: "2023-01-15", image: "adventure.jpg" },
  {
    title: "Mystery of the Old House",
    date: "2023-02-20",
    image: "mystery.jpg",
  },
  { title: "Coding Best Practices", date: "2024-03-10", image: "coding.jpg" },
];

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(initialDataArray1);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value === "") {
      // If the search term is empty, show all data
      setFilteredData(initialDataArray1);
    } else {
      // Filter data based on the search term (case-insensitive)
      const lowercasedValue = value.toLowerCase();
      const newFilteredData = initialDataArray1.filter((item) =>
        item.title.toLowerCase().includes(lowercasedValue)
      );
      setFilteredData(newFilteredData);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ padding: "8px", marginBottom: "20px", width: "300px" }}
      />

      <div>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <h3>{item.title}</h3>
              <p>Date: {item.date}</p>
              <p>Image: {item.image}</p>
            </div>
          ))
        ) : (
          <p>No matching results found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchComponent;
