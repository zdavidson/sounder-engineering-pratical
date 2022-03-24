import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Expenses from "./components/Expenses";
import CreateSubscription from "./components/CreateSubscription";
import SubscriptionDetails from "./components/SubscriptionDetails";
import EditSubscription from "./components/EditSubscription";

// EditSubscription & Delete
// Home -- See all subscriptions in table paginated at 10 per page, able to select several and delete at once
// SubscriptionDetails

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/create" element={<CreateSubscription />} />
          <Route path="/details/:id" element={<SubscriptionDetails />} />
          <Route path="/edit/:id" element={<EditSubscription />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
