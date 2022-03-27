const CreateSubscription = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "45vw",
          alignItems: "center",
        }}
      >
        <input type="text" placeholder="Subscription Name" />
        <input type="text" placeholder="Price" />
        <div>
          <input type="radio" id="monthly" value="monthly" />
          <label htmlFor="monthly">Monthly</label>
        </div>
        <div>
          <input type="radio" id="annual" value="annual" />
          <label htmlFor="annual">Annual</label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreateSubscription;
