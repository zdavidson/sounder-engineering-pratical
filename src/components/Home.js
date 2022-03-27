import SubscriptionTable from "./SubscriptionTable";
import { useLocation, useParams } from "react-router";

const Home = () => {
  let params = useParams();
  let location = useLocation();
  console.log(location);

  return (
    <div>
      <SubscriptionTable />
    </div>
  );
};

export default Home;
