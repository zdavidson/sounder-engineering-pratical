import {
  cleanup,
  render,
  screen,
  waitForElement,
  debug,
  afterEach,
  fireEvent,
} from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Expenses from "./components/Expenses";
import CreateSubscription from "./components/CreateSubscription";
import Navigation from "./components/Navigation";
import SubscriptionCard from "./components/SubscriptionCard";
import SubscriptionTable from "./components/SubscriptionTable";
import SubscriptionDetails from "./components/SubscriptionDetails";
import { SelectedSubscriptionProvider } from "./context/SelectedSubscriptionContext";

test("App renders", () => {
  render(<App />);
});

test("Home renders", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
});

test("Expenses renders", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Expenses />} />
      </Routes>
    </BrowserRouter>
  );
});

test("CreateSubscription Renders", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateSubscription />} />
      </Routes>
    </BrowserRouter>
  );
});

test("Nav loads", () => {
  render(<Navigation />);

  screen.getByTestId("navigation").hasChildNodes();
  screen.getByText("Home");
});

test("SubscriptionTable loads", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SubscriptionTable />} />
      </Routes>
    </BrowserRouter>
  );

  screen.getByTestId("subscription-table").hasChildNodes();
});

// test("SubscriptionCard data loads", () => {
//   render(
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<SubscriptionCard />} />
//       </Routes>
//     </BrowserRouter>
//   );

//   screen.getByText("Edit");
// });

// describe("SelectedSubsciptionContext", () => {
//   it("returns data", () => {
//     const { getByText } = render(
//       <SelectedSubscriptionProvider>
//         <SubscriptionCard />
//       </SelectedSubscriptionProvider>
//     );

//     fireEvent.click.getByText("<h2>");

//     expect();
//   });
// });
