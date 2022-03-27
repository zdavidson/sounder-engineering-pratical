import SubscriptionCard from "./SubscriptionCard";
import data from "../assets/data/data.json";
import { useState } from "react";
import Pagination from "./Pagination";

const SubscriptionTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const subscriptionsPerPage = 10;

  // Get current subscriptions
  const indexOfLastSubscription = currentPage * subscriptionsPerPage;
  const indexOfFirstSubscription =
    indexOfLastSubscription - subscriptionsPerPage;
  const currentSubscriptions = data.slice(
    indexOfFirstSubscription,
    indexOfLastSubscription
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div data-testid="subscription-table">
      <button>Delete Selected</button>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {currentSubscriptions.map((subscription, key) => {
          return <SubscriptionCard key={key} subscription={subscription} />;
        })}
      </div>
      <Pagination
        subscriptionsPerPage={subscriptionsPerPage}
        totalSubscriptions={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default SubscriptionTable;
