// import React from "./przycisk";

class Form extends React.Component {
  state = {
    city: "London",
    text: "",
    isLoved: true,
    number: "0",
  };

  handleChange = (e) => {
    console.log(e.target.type);
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  render() {
    return (
      <>
        <h3 className="title">
          Witaj na lekcji 47 cz.1 komponent kontrolowany i niekontrolowany
        </h3>
        <label className="lab">
          Podaj miasto
          <input
            className="inputCity"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
            type="text"
          />
        </label>
        <br />
        <label className="lab">
          Napisz mi cos o tym miescie
          <textarea
            name="text"
            placeholder="Napisz mi..."
            value={this.state.text}
            onChange={this.handleChange}
            type="text"
          />
        </label>
        <br />
        <label className="lab">
          czy lubisz to miasto?
          <input
            className="isLoved"
            name="isLoved"
            type="checkbox"
            checked={this.state.isLoved}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label className="lab">
          Ile razy byliscie w tym miescie?
          <select
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">wiecej</option>
          </select>
        </label>
      </>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
