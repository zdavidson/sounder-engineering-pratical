const Pagination = ({ subscriptionsPerPage, totalSubscriptions, paginate }) => {
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(totalSubscriptions / subscriptionsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  return (
    <ul
      style={{
        listStyleType: "none",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {pageNumbers.map((number) => (
        <li key={number}>
          <button
            onClick={() => paginate(number)}
            style={{
              padding: "2rem",
              margin: "0.25rem",
              backgroundColor: "white",
              border: "1px solid black",
            }}
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
