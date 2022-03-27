import { useSelectedSubscription } from "../context/SelectedSubscriptionContext";

const EditSubscription = () => {
  const selectedSubscription = useSelectedSubscription();

  return (
    <>
      <h2>Edit Subscription</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "45vw",
            alignItems: "center",
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
            onClick={(e) => e.preventDefault()}
          />
        </form>
      </div>
    </>
  );
};

export default EditSubscription;
