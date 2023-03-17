const NavBar = ({ unCompletedTodos }) => {
  return (
    <header>
      <span>{unCompletedTodos}</span> <h2> are not completed</h2>
    </header>
  );
};

export default NavBar;
