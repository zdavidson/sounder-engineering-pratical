const SubscriptionCard = ({ subscription }) => {
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
      <h2>{subscription.name}</h2>
      <p>{subscription.price}</p>
      <p>{subscription.frequency}</p>

      <a href="#">Edit</a>
      <br></br>
      <a href="#">Delete</a>
    </div>
  );
};

export default SubscriptionCard;
