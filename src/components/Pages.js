import SubscriptionCard from "./SubscriptionCard";
import data from "../assets/data/data.json";

const Pages = ({ limit }) => {
  return (
    <>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {data.map((subscription, key) => {
          if (key < limit) {
            return <SubscriptionCard key={key} subscription={subscription} />;
          }
          return "";
        })}
      </div>
    </>
  );
};

export default Pages;
