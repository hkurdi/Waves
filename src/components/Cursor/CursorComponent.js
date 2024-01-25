import React, { useEffect, useState } from 'react';
import './cursor.css'; 

const CursorComponent = () => {
  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".circle");

  const colors = [
    "#14a87e",
    "#159f7c",
    "#17957a",
    "#198c78",
    "#1b8377",
    "#1d7a75",
    "#1f7173",
    "#216870",
    "#23606e",
    "#25576c",
    "#275e6a",
    "#295568",
    "#2b4c67",
    "#2d4365",
    "#2f3a63",
    "#313261",
    "#332960",
    "#35205e",
    "#37175c",
    "#391e5a",
    "#3b1559",
    "#3d0c57"
  ];


  circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
  });
  
  window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;
    
  });
  
  function animateCircles() {
  
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";
      
      circle.style.scale = (circles.length - index) / circles.length;
      
      circle.x = x;
      circle.y = y;
  
      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });
   
    requestAnimationFrame(animateCircles);
  }
  
  animateCircles();
  
}

export default CursorComponent;
