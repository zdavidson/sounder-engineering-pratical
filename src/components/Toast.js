import { useToast, useShowToast } from "../context/ToastContext";

const Toast = ({ toastText }) => {
  const toggleToast = useToast();
  const showToast = useShowToast();

  return (
    <div
      style={{
        border: "1px solid grey",
        padding: "1rem 1.5rem",
        display: showToast ? "inline" : "none",
      }}
    >
      Great job, you just {toastText}!
      <button
        style={{
          padding: "0.5rem",
          marginLeft: "1rem",
          backgroundColor: "white",
        }}
        onClick={() => {
          toggleToast();
        }}
      >
        x
      </button>
    </div>
  );
};

export default Toast;
