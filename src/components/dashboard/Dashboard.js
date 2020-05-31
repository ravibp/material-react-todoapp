import React from "react";
import TodoPage from "../todo/TodoPage";

export default function Dashboard({ open }) {
  return (
    <div className="dashboard-container">
      <TodoPage />
    </div>
  );
}
