import { useShowBreadcrumbs } from "../context/BreadcrumbsContext";

const Breadcrumbs = () => {
  const pages = useShowBreadcrumbs();
  console.log(pages);

  console.log(window.onchange);

  return (
    <div style={{ margin: "1rem", marginLeft: "10vw", textAlign: "left" }}>
      {pages?.map((page, key) => {
        return (
          <a key={key} href={page.pathname}>
            <span> </span> {page.name} <span>/</span>
          </a>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
