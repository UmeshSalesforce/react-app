function Form() {
  return (
    <div className="row g-2">
      <div className="col-md">
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInputGrid"
            placeholder="name@example.com"
            value="mdo@example.com"
          />
          <label htmlFor="floatingInputGrid">Email address</label>
        </div>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <select className="form-select" id="floatingSelectGrid">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label htmlFor="floatingSelectGrid">Works with selects</label>
        </div>
      </div>
    </div>
  );
}

export default Form;
