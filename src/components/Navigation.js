const Navigation = () => {
  return (
    <div>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <li style={{ margin: "1rem 2rem" }}>
          <a href="/">Home</a>
        </li>
        <li style={{ margin: "1rem 2rem" }}>
          <a href="/expenses">Expenses</a>
        </li>
        <li style={{ margin: "1rem 2rem" }}>
          <a href="/create">Create Subscription</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
