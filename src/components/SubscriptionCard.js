import { useSelectedSubscriptionUpdate } from "../context/SelectedSubscriptionContext";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubscriptionCard = ({ subscription }) => {
  const [display, setDisplay] = useState("block");
  const setSelectedSubscription = useSelectedSubscriptionUpdate();

  let navigate = useNavigate();

  return (
    <div
      className="subscription-card"
      data-testid="subscription-card"
      style={{
        border: "1px solid blue",
        padding: "2rem",
        margin: "1rem",
        width: "18%",
        display: display,
      }}
    >
      <input type="checkbox" />
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
      <a
        href="/delete"
        onClick={(e) => {
          e.preventDefault();
          setDisplay("none");
        }}
      >
        Delete
      </a>
    </div>
  );
};

export default SubscriptionCard;
