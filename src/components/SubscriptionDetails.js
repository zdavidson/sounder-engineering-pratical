import { useSelectedSubscription } from "../context/SelectedSubscriptionContext";

const SubscriptionDetails = () => {
  const selectedSubscription = useSelectedSubscription();

  return (
    <div>
      <h2>Subscription Details</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p>
          <b>ID: </b> {selectedSubscription.id}
        </p>
        <p>
          <b>Name: </b> {selectedSubscription.name}
        </p>
        <p>
          <b>Price: </b>
          {selectedSubscription.price}
        </p>
        <p>
          <b>Description: </b>
          {selectedSubscription.description}
        </p>
        <p>
          <b>Created At: </b>
          {selectedSubscription.created_at}
        </p>
        <p>
          <b>Updated At: </b>
          {selectedSubscription.updated_at}
        </p>
      </div>{" "}
    </div>
  );
};

export default SubscriptionDetails;
