import data from "../assets/data/data.json";

const Expenses = () => {
  let totalMonthlyCost = 0;
  data.map((subscription) => {
    return subscription.frequency === "monthly"
      ? (totalMonthlyCost += subscription.price)
      : 0;
  });

  let totalAnnualCost = 0;
  data.map((subscription) => {
    return subscription.frequency === "annual"
      ? (totalAnnualCost += subscription.price)
      : 0;
  });

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "45vw" }}>
        <h2>Monthly Expenses</h2>
        <ul>
          {data.map((subscription, key) => {
            return subscription.frequency === "monthly" ? (
              <div key={key}>
                {subscription.name} {subscription.price}
              </div>
            ) : (
              ""
            );
          })}
        </ul>
        <h3>Total Monthly Expenses: ${totalMonthlyCost.toFixed(2)}</h3>
      </div>
      <div style={{ width: "45vw" }}>
        <h2>Annual Expenses</h2>
        <ul>
          {data.map((subscription, key) => {
            return subscription.frequency === "annual" ? (
              <div key={key}>
                {subscription.name} {subscription.price}
              </div>
            ) : (
              ""
            );
          })}
        </ul>
        <h3>Total Annual Expenses: ${totalAnnualCost.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Expenses;
