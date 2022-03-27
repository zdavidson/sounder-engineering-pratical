import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Breadcrumbs from "./components/Breadcrumbs";
import Expenses from "./components/Expenses";
import CreateSubscription from "./components/CreateSubscription";
import SubscriptionDetails from "./components/SubscriptionDetails";
import EditSubscription from "./components/EditSubscription";

import { SelectedSubscriptionProvider } from "./context/SelectedSubscriptionContext";
import { ToastProvider } from "./context/ToastContext";
import { BreadcrumbsProvider } from "./context/BreadcrumbsContext";

// Cover some of the critical paths (in your opinion) of the application with integration tests
// Able to select several subscriptions and delete at once
// Change from timestamp to actual dates

function App() {
  return (
    <Router>
      <BreadcrumbsProvider>
        <SelectedSubscriptionProvider>
          <ToastProvider>
            <div className="App">
              <Navigation />
              <Breadcrumbs />

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
      </BreadcrumbsProvider>
    </Router>
  );
}

export default App;
