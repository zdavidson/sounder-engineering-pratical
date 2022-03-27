import { useRemoveBreadcrumbs } from "../context/BreadcrumbsContext";

const Navigation = () => {
  const removefromBreadcrumbs = useRemoveBreadcrumbs();

  return (
    <div data-testid="navigation">
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <li style={{ margin: "1rem 2rem" }}>
          <a id="home" href="/" onClick={removefromBreadcrumbs}>
            Home
          </a>
        </li>
        <li style={{ margin: "1rem 2rem" }}>
          <a href="/expenses" onClick={removefromBreadcrumbs}>
            Expenses
          </a>
        </li>
        <li style={{ margin: "1rem 2rem" }}>
          <a href="/create" onClick={removefromBreadcrumbs}>
            Create Subscription
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
