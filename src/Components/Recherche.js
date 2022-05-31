import React, { Component } from "react";
import { Button, Select } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
class Recherche extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dpt: "",
      type: ""
    };
  }
  OnDptChange = (e, data) => {
    this.setState({
      dpt: data.value
    });
  };
  OnTypeChange = (e, data) => {
    this.setState({
      type: data.value
    });
  };

  render() {
    const OptionDPT = [
      { key: "95", value: "95", text: "Val d'oise" },
      { key: "93", value: "93", text: "Seine Saint-Denis" },
      { key: "78", value: "78", text: "Yvelines" },
      { key: "91", value: "91", text: "Essones" },
      { key: "77", value: "77", text: "Seint-et-Marne" }
    ];
    const OptionType = [
      {
        key: "greta",
        value: "greta",
        text: "GRETA"
      },
      {
        key: "caf",
        value: "caf",
        text: "CAF"
      },
      {
        key: "mission_locale",
        value: "mission_locale",
        text: "Mission Locale"
      },
      {
        key: "tresorerie",
        value: "tresorerie",
        text: "Tresorerie"
      }
    ];
    return (
      <div className="recherche">
        <Select
          placeholder="Choisissez un Departement"
          options={OptionDPT}
          onChange={this.OnDptChange}
        />
        <Select
          onChange={this.OnTypeChange}
          placeholder="Choisissez un Adminestration"
          options={OptionType}
        />
        <div>
          <br />
          <br />
          <Button
            primary
            onClick={() => {
              this.props.onsearch(this.state.dpt, this.state.type);
            }}
          >
            Lancer la Recherche
          </Button>
          <Button secondary onClick={this.props.onempty}>
            Vider la Recherche
          </Button>
        </div>
      </div>
    );
  }
}
export default Recherche;
