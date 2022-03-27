import SubscriptionCard from "./SubscriptionCard";
import data from "../assets/data/data.json";

const SubscriptionTable = () => {
  return (
    <>
      <button>Delete Selected</button>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {data.map((subscription, key) => {
          return <SubscriptionCard key={key} subscription={subscription} />;
        })}
      </div>
    </>
  );
};

export default SubscriptionTable;
