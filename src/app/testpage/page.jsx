"use client";

import React, { useState } from "react";

export default function Dropdown() {
  const [selectedItem, setSelectedItem] = useState("");

  // Handle dropdown value change and automatically submit
  const handleDropdownChange = async (e) => {
    const selectedValue = e.target.value;

    // Update the selected item state
    setSelectedItem(selectedValue);

    // Prevent submission if no value is selected
    if (!selectedValue) return;

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item: selectedValue }), // Send the selected item
      });

      // Check for errors in the response
      if (!response.ok) {
        const errorText = await response.text();
        const errorJson = errorText
          ? JSON.parse(errorText)
          : { error: "An unexpected error occurred" };
        alert(`Error: ${errorJson.error || errorJson.message}`);
        return;
      }

      // Handle success response
      const result = await response.json();
      alert(`Success: ${result.message}`);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="form-group">
      <select
        name="item"
        id="itemDropdown"
        className="form-control"
        value={selectedItem}
        onChange={handleDropdownChange}
        required
      >
        <option value="">Select Items</option>
        <option value="PVC Footwear Compound">PVC Footwear Compound</option>
        <option value="PVC Granules">PVC Granules</option>
        <option value="PVC Natural Compound">PVC Natural Compound</option>
        <option value="PVC Colored Compound">PVC Colored Compound</option>
        <option value="PVC Transparent Compound">
          PVC Transparent Compound
        </option>
        <option value="PVC Dana">PVC Dana</option>
        <option value="PVC Pellets">PVC Pellets</option>
        <option value="Auto Parts PVC Compound">Auto Parts PVC Compound</option>
        <option value="White PVC Compound">White PVC Compound</option>
        <option value="Other Industry">Other Industry</option>
      </select>
    </div>
  );
}
