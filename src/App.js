import React, { Component } from 'react';
import MapContainer from './containers/MapContainer'
import QuakeContainer from './containers/QuakeContainer'
import QuakeModel from './models/QuakeModel'

class App extends Component {
  constructor(){
    super()
    this.state = {
      quakes: [],
      time: 'week'
    }
    this.changeTime = this.changeTime.bind(this);
  }

  componentDidMount(){
    this.fetchData('week')
  }

  fetchData(time){
    QuakeModel.all(time).then( (res) => {
      console.log('Here is the res:',res)
      this.setState ({
        quakes: res.data.features,
      })
    })
  }

  changeTime(){
    if (this.state.time === 'week'){
      this.setState({time:'month'})
      this.fetchData('month');
    } else {
      this.setState({time:'week'})
      this.fetchData('week');
    }
    
  }

  render() {
    const style = {
      postion: 'static',
  }
    return (
      <div className="app">
        <div className="mapContainer">
          <MapContainer style={style}  quakes={this.state.quakes}/>
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past <span onClick={this.changeTime}>{this.state.time}:</span> </h1>
            <QuakeContainer quakes={this.state.quakes}/>
        </div>
      </div>
    );
  }
}

export default App;
