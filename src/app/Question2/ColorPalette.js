'use client';
import React, { useState } from 'react';

const COLORS = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#3f51b5',
  '#7c4dff',
  '#009688',
  '#4caf50',
  '#ffc107',
];

const ColorItem = ({ color, index, updateColor }) => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData('colorIndex', index);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    const draggedIndex = event.dataTransfer.getData('colorIndex');
    if (draggedIndex !== undefined && draggedIndex !== index) {
      updateColor(draggedIndex, index);
    }
  };

  const style = {
    backgroundColor: color,
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="color-item"
      style={style}
    />
  );
};

const ColorPalette = () => {
  const [colors, setColors] = useState(COLORS);

  const updateColor = (sourceIndex, targetIndex) => {
    const newColors = [...colors];
    [newColors[sourceIndex], newColors[targetIndex]] = [
      newColors[targetIndex],
      newColors[sourceIndex],
    ];
    setColors(newColors);
  };

  return (
    <div className="color-palette">
      {colors.map((color, index) => (
        <ColorItem key={index} color={color} index={index} updateColor={updateColor} />
      ))}
    </div>
  );
};

export default ColorPalette;
