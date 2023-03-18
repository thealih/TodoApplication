import { useState } from "react";

const NavBar = ({ unCompletedTodos, onSelect, status }) => {
  if (!unCompletedTodos) return <h2>set your today todos</h2>;
  return (
    <header>
      <span>{unCompletedTodos}</span> <h2> are not completed</h2>
      <select onChange={onSelect} value={status}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
    </header>
  );
};

export default NavBar;
