import React, {Component} from 'react'
import Quake from './Quake'

class Quakes extends Component {
  render(){
    let quakes = this.props.quakes.map( (quake, i) => {
      return (
        <Quake
          quake={quake} key={i}/>
      )
    })
    
    return(
      <div className="quakes">
      <h3>Recent Quakes</h3>
        {quakes}
      </div>
    )
  }
}

export default Quakes