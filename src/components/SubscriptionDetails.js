import { useSelectedSubscription } from "../context/SelectedSubscriptionContext";

const SubscriptionDetails = () => {
  const selectedSubscription = useSelectedSubscription();

  console.log(selectedSubscription);
  return (
    <div>
      <h2>Subscription Details</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>{selectedSubscription.id}</p>
        <p>{selectedSubscription.name}</p>
        <p>{selectedSubscription.price}</p>
        <p>{selectedSubscription.description}</p>
        <p>{selectedSubscription.created_at}</p>
        <p>{selectedSubscription.updated_at}</p>
      </div>{" "}
    </div>
  );
};

export default SubscriptionDetails;
