import React, {Component} from 'react'

class Quake extends Component {

    render(){

        let style = {color:'black'}
    if (this.props.quake.properties.mag > 6){
        style = {color:'red'}
    } else if (this.props.quake.properties.mag > 5) {
        style = {color:'orange'}
    }
    var now = new Date();
    var hoursAgo = (now.valueOf() - this.props.quake.properties.time) / 1000 / 60 / 60; // ms / (ms/sec) / (sec/min) / (min/hr)
    var place = this.props.quake.properties.place;
                    if (place.indexOf(' of ') !== -1) {
                        place = place.substring(place.indexOf(' of ') + 4)
                    }
      return(
        <div className="quakes" style={style}>
          <h3>{this.props.quake.properties.mag} -- {place}</h3>
          <h4>This happend {hoursAgo.toFixed(0)} hours ago.</h4>
          
        </div>
      )
    }
  }
  
  export default Quake