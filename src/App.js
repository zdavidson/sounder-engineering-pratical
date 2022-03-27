import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Expenses from "./components/Expenses";
import CreateSubscription from "./components/CreateSubscription";
import SubscriptionDetails from "./components/SubscriptionDetails";
import EditSubscription from "./components/EditSubscription";

import { SelectedSubscriptionProvider } from "./context/SelectedSubscriptionContext";
import { ToastProvider } from "./context/ToastContext";

// Home -- See all subscriptions in table paginated at 10 per page

// SubscriptionDetails -- needs to display currently selected sub
// use ReactQuery for data fetching

// Create a Toast component and use it after each successful (or unsuccessful) action
// Store the toast state in a Context so it can be accessed everywhere
// Create a useToast custom hook that you can use to show toasts from any component

// Create a breadcrumbs component that sits on top of every page so you can navigate the page hierarchy
// Cover some of the critical paths (in your opinion) of the application with integration tests

// Able to select several subscriptions and delete at once -- useContext to set Array of subscriptions to delete, then useContext to pass delete button power to hide all of those subscriptions

function App() {
  return (
    <Router>
      <SelectedSubscriptionProvider>
        <ToastProvider>
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
        </ToastProvider>
      </SelectedSubscriptionProvider>
    </Router>
  );
}

export default App;
