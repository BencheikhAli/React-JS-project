import react, { render } from "react-dom";
import React, { Children, Component } from "react";
import Recherche from "./Components/Recherche";
import Etablissement from "./Components/Etablissement";
import "./styles.css";
import "./Components/recherche.css";
import { Message } from "semantic-ui-react";
import { Card } from "semantic-ui-react";

var monProjet = "Mini Projet!";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: ""
    };
  }
  onSearch = async (dpt, type) => {
    if (dpt && type) {
      try {
        let response = await fetch(
          "https://etablissements-publics.api.gouv.fr/v3/departements/" +
            dpt +
            "/" +
            type
        );
        let data = await response.json();
        this.setState({
          data: data.features
        });
      } catch (e) {
        this.setState({
          error: "Erreur lors de la recherche"
        });
      }
    } else {
      this.setState({
        error: "Merci de bien choisir un departement ! "
      });
    }
  };
  onEmpty = () => {
    this.setState({
      data: [],
      error: ""
    });
  };

  //afichier les info
  renderResault = () => {
    return this.state.data.map((etablissements) => {
      return (
        <Etablissement
          key={etablissements.properties.id}
          properties={etablissements.properties}
        />
      );
    });
  };
  render() {
    return (
      <div className="App">
        <h1>
          {monProjet} <span className="react">React</span>
        </h1>
        <Recherche onsearch={this.onSearch} onempty={this.onEmpty} />
        {this.state.error ? (
          <Message negative size="massive">
            {this.state.error}
          </Message>
        ) : undefined}
        {this.state.data ? (
          <Card.Group> {this.renderResault()}</Card.Group>
        ) : undefined}
      </div>
    );
  }
}
export default App;
