import React, { Component } from 'react';
import List from '../List/List';
import Dropdown from '../Dropdown/Dropdown';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: 'BTC Converted',
      bpi: [],
      value: '',
    };
  }

  componentDidMount() {
    this.getData();
    this.interval = setInterval(this.getData, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getData = async () => {
    const { bpi: stateBpi } = this.state;
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const { bpi } = await response.json();
    const currencies = Object.entries(bpi).map(([key, value]) => {
      const bpiValue = stateBpi.find(val => val.code === key) || {};
      return {
        ...value,
        show: bpiValue.show || false,
      };
    });

    this.setState({ bpi: currencies });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  toggleCurrency = code => {
    const { bpi } = this.state;
    const bpiIndex = bpi.findIndex(val => val.code === code);
    if (bpiIndex > -1) {
      const newBpi = bpi;
      newBpi[bpiIndex].show = !newBpi[bpiIndex].show;

      this.setState({ bpi: newBpi });
    }
  };

  render() {
    const { bpi, value } = this.state;
    return (
      <div className="container-fluid">
        <header>
          <h1 className="text-center">{this.state.title}</h1>
        </header>
        <main className="container">
          <Form handleChange={this.handleChange} />
          <Dropdown currencies={bpi} onClick={this.toggleCurrency} />
          <List bpi={bpi} input={value} onClick={this.toggleCurrency} />
        </main>
      </div>
    );
  }
}

export default App;
