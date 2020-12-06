import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function CardGroup({ children }) {
  return (
      <div className="card-group">{children}</div>
  );
}

export function Card({ children }) {
  return <div class="card">{children}</div>;
}
