import { useSelectedSubscription } from "../context/SelectedSubscriptionContext";
import { useToast } from "../context/ToastContext";
import Toast from "./Toast";

const EditSubscription = () => {
  const selectedSubscription = useSelectedSubscription();
  const toggleToast = useToast();
  const toastText = "created a new subscription";

  return (
    <>
      <h2>Edit Subscription</h2>
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
          <input type="text" defaultValue={selectedSubscription.name} />
          <input type="text" defaultValue={selectedSubscription.price} />
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
    </>
  );
};

export default EditSubscription;
