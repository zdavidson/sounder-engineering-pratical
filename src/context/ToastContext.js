import React, { useContext, useState } from "react";

export const ToastContext = React.createContext();
export const ShowToastContext = React.createContext();

export const useToast = () => {
  return useContext(ToastContext);
};

export const useShowToast = () => {
  return useContext(ShowToastContext);
};

export const ToastProvider = ({ children }) => {
  const [showToast, setShowToast] = useState(false);

  const toggleToast = () => {
    setShowToast(!showToast);
  };

  return (
    <ToastContext.Provider value={toggleToast}>
      <ShowToastContext.Provider value={showToast}>
        {children}
      </ShowToastContext.Provider>
    </ToastContext.Provider>
  );
};
