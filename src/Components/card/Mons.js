import React, { Component } from "react";
import "./Mons.css";

class Mons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      loading: false,
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((response) =>
        this.setState({ monsters: response.results, loading: true })
      );
  }

  render() {
    var { monsters, loading } = this.state;

    if (!loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container">
          {monsters.map((monster) => (
            <div key={monster.id} className="content">
              <img
                className="image"
                src={monster.picture.large}
                alt={monster.name}
              ></img>
              <p className="info">Gender: {monster.gender} </p>
              <br />
              <p className="info">Title: {monster.name.title} </p>
              <br />
              <p className="info">Firstname: {monster.name.first}</p>
              <br />
              <p className="info">Lastname: {monster.name.last}</p>
              <br />
              <p className="info">City: {monster.location.city}</p>
              <br />
              <p className="info">State: {monster.location.state}</p>
              <br />
              <p className="info">Country: {monster.location.country}</p>
              <br />
              <p className="info">Postcode: {monster.location.postcode}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Mons;
