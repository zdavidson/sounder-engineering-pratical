import React, { useContext, useState } from "react";

export const BreadcrumbsContext = React.createContext();
export const ShowBreadcrumbsContext = React.createContext();
export const RemoveFromBreadcrumbsContext = React.createContext();

export const useBreadcrumbs = () => {
  return useContext(BreadcrumbsContext);
};

export const useShowBreadcrumbs = () => {
  return useContext(ShowBreadcrumbsContext);
};

export const useRemoveBreadcrumbs = () => {
  return useContext(RemoveFromBreadcrumbsContext);
};

export const BreadcrumbsProvider = ({ children }) => {
  const [showBreadcrumbs, setShowBreadcrumbs] = useState([
    { name: "Home", pathname: "/" },
  ]);

  const addToBreadcrumbs = (value) => {
    setShowBreadcrumbs([...showBreadcrumbs, value]);
  };

  const removefromBreadcrumbs = () => {
    showBreadcrumbs.pop();
    setShowBreadcrumbs([...showBreadcrumbs]);
  };

  return (
    <BreadcrumbsContext.Provider value={addToBreadcrumbs}>
      <ShowBreadcrumbsContext.Provider value={showBreadcrumbs}>
        <RemoveFromBreadcrumbsContext.Provider value={removefromBreadcrumbs}>
          {children}
        </RemoveFromBreadcrumbsContext.Provider>
      </ShowBreadcrumbsContext.Provider>
    </BreadcrumbsContext.Provider>
  );
};
