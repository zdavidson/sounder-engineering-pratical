import React, { useContext, useState } from "react";

export const SubscriptionsToDeleteContext = React.createContext();
export const SetSubscriptionsToDeleteContext = React.createContext();

export const DeleteSubscriptionsContext = React.createContext();
export const SetDeleteSubscriptionsContext = React.createContext();

export const useSubscriptionsToDelete = () => {
  return useContext(SubscriptionsToDeleteContext);
};

export const useSetSubscriptionsToDelete = () => {
  return useContext(SetSubscriptionsToDeleteContext);
};

export const useDeleteSubscriptions = () => {
  return useContext(DeleteSubscriptionsContext);
};

export const useSetDeleteSubscriptions = () => {
  return useContext(SetDeleteSubscriptionsContext);
};

export const SubscriptionsToDeleteProvider = ({ children }) => {
  const [subscriptionsToDelete, setSubscriptionsToDelete] = useState([]);
  const [isHidden, setIsHidden] = useState(false);

  const updateSubscriptionsToDelete = (value) => {
    setSubscriptionsToDelete([...subscriptionsToDelete, value]);
  };

  const updateIsHidden = () => {
    setIsHidden(true);
  };

  return (
    <SubscriptionsToDeleteContext.Provider value={subscriptionsToDelete}>
      <SetSubscriptionsToDeleteContext.Provider
        value={updateSubscriptionsToDelete}
      >
        <SetDeleteSubscriptionsContext.Provider value={updateIsHidden}>
          <DeleteSubscriptionsContext.Provider value={isHidden}>
            {children}
          </DeleteSubscriptionsContext.Provider>
        </SetDeleteSubscriptionsContext.Provider>
      </SetSubscriptionsToDeleteContext.Provider>
    </SubscriptionsToDeleteContext.Provider>
  );
};
