import axios from 'axios'

class QuakeModel {
  static all(time){
      console.log(time)
      if (time === 'week'){
          console.log('getting week')
        return axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson')
      } else {
        console.log('getting month')
        return axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson')
      }
  }
}

export default QuakeModel