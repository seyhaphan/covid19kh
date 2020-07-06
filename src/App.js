import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './App.css'
import Axios from 'axios'
import CountUp from 'react-countup'

export default class App extends Component {
  state = {
    confirmed: {},
    recovered: {},
    deaths: {}
  }
  async componentWillMount() {
    const baseUrl = 'https://covid19.mathdro.id/api/countries/cambodia';
    const result = await Axios.get(baseUrl);
    const { confirmed, recovered, deaths, lastUpdate } = result.data;

    this.setState({
      confirmed,
      recovered,
      deaths,
      lastUpdate
    });

  }
  render() {
    const { confirmed, recovered, deaths, lastUpdate } = this.state;
    console.log(lastUpdate);
    if (!confirmed.value) {
      return 'loading...'
    }

    return (
      <div className='main container mt-4 d-flex flex-wrap justify-content-center'>
        <h1 style={{ width: '100%', textAlign: 'center' }}>Cambodia covid19</h1>
        <Card bg='primary' text='white' className="card-item">
          <Card.Header>Confirmed</Card.Header>
          <Card.Body>
            <Card.Title>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=','
              />
            </Card.Title>
            <Card.Text>
              {new Date(lastUpdate).toDateString()}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card bg='warning' text='white' className="card-item">
          <Card.Header>Recovered</Card.Header>
          <Card.Body>
            <Card.Title>
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=','
              />
            </Card.Title>
            <Card.Text>
              {new Date(lastUpdate).toDateString()}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card bg='danger' text='white' className="card-item">
          <Card.Header>Deaths</Card.Header>
          <Card.Body>
            <Card.Title>
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=','
              />
            </Card.Title>
            <Card.Text>
              {new Date(lastUpdate).toDateString()}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
