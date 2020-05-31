import React from 'react';
import { Cards, Chart } from './components/';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {


  state = {
    data: {},
  }





  async componentDidMount() {

    const fetchedData = await fetchData();

    this.setState({ data: fetchedData })

  }



  render() {

    // uesd to destructure data from the state
    const { data } = this.state;

    return (

      <div className={styles.container}>
        <h1>App</h1>
        <Chart />
        <Cards data={data} />

      </div>

    )

  }

}

export default App;