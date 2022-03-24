import { useSelectedSubscription } from "../context/SelectedSubscriptionContext";

const EditSubscription = () => {
  const selectedSubscription = useSelectedSubscription();

  return (
    <>
      <h2>Edit Subscription</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>{selectedSubscription.id}</p>
        <p>{selectedSubscription.name}</p>
        <p>{selectedSubscription.price}</p>
        <p>{selectedSubscription.description}</p>
        <p>{selectedSubscription.created_at}</p>
        <p>{selectedSubscription.updated_at}</p>
      </div>
    </>
  );
};

export default EditSubscription;
