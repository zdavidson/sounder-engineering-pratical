import { useToast } from "../context/ToastContext";
import Toast from "./Toast";

const CreateSubscription = () => {
  const toggleToast = useToast();
  const toastText = "created a new subscription";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "45vw",
          alignItems: "center",
          marginBottom: "5rem",
        }}
      >
        <input type="text" placeholder="Subscription Name" />
        <input type="text" placeholder="Price" />
        <div>
          <input type="radio" id="monthly" value="monthly" />
          <label htmlFor="monthly">Monthly</label>
        </div>
        <div>
          <input type="radio" id="annual" value="annual" />
          <label htmlFor="annual">Annual</label>
        </div>
        <input
          type="submit"
          value="Submit"
          onClick={(e) => {
            e.preventDefault();
            toggleToast();
          }}
        />
      </form>
      <Toast toastText={toastText} />
    </div>
  );
};

export default CreateSubscription;
