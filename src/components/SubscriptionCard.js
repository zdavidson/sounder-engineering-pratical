import { useSelectedSubscriptionUpdate } from "../context/SelectedSubscriptionContext";

import { useNavigate } from "react-router-dom";

const SubscriptionCard = ({ subscription }) => {
  const setSelectedSubscription = useSelectedSubscriptionUpdate();
  let navigate = useNavigate();

  return (
    <div
      className="subscription-card"
      style={{
        border: "1px solid blue",
        padding: "2rem",
        margin: "1rem",
        width: "18%",
      }}
    >
      <h2>
        <a
          href={"/details/" + subscription.id}
          onClick={(e) => {
            e.preventDefault();
            setSelectedSubscription(subscription);
            navigate(`/details/${subscription.id}`);
          }}
        >
          {subscription.name}
        </a>
      </h2>
      <p>{subscription.price}</p>
      <p>{subscription.frequency}</p>

      <a
        href={"/edit/" + subscription.id}
        onClick={(e) => {
          e.preventDefault();
          setSelectedSubscription(subscription);
          navigate(`/edit/${subscription.id}`);
        }}
      >
        Edit
      </a>
      <br></br>
      <a href="#">Delete</a>
    </div>
  );
};

export default SubscriptionCard;
