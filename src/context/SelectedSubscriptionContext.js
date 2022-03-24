import React, { useContext, useState } from "react";

export const SelectedSubscriptionContext = React.createContext();
export const SelectedSubscriptionUpdateContext = React.createContext();

export const useSelectedSubscription = () => {
  return useContext(SelectedSubscriptionContext);
};

export const useSelectedSubscriptionUpdate = () => {
  return useContext(SelectedSubscriptionUpdateContext);
};

export const SelectedSubscriptionProvider = ({ children }) => {
  const [selectedSubscription, setSelectedSubscription] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
    created_at: "",
    updated_at: "",
  });

  const updateSelectedSubscription = (value) => {
    setSelectedSubscription(value);
  };

  return (
    <SelectedSubscriptionContext.Provider value={selectedSubscription}>
      <SelectedSubscriptionUpdateContext.Provider
        value={updateSelectedSubscription}
      >
        {children}
      </SelectedSubscriptionUpdateContext.Provider>
    </SelectedSubscriptionContext.Provider>
  );
};
