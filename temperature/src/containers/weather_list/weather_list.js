import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../../components/chart'
import GoogleMap from '../../components/google_map'

import './style.css'


class WeatherList extends Component {

    renderWeather = (cityData) => {
        // console.log(cityData)
        if (!cityData) return (
            <tr key="notFoundCity">
                <th colSpan="4">Not found this city name:</th>
            </tr>
        )
        // if(cityData){
        const { id, name } = cityData.city
        const temps = cityData.list.map(weather => weather.main.temp)
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const humidites = cityData.list.map(weather => weather.main.humidity)
        const { lat, lon } = cityData.city.coord

        return (
            <tr key={id} name={name}>
                {/* <td>{name}</td> */}
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td>
                    <Chart data={temps} color="red" unit="K" />
                </td>
                <td>
                    <Chart data={pressures} color="green" unit="hpa" />
                </td>
                <td>
                    <Chart data={humidites} color="orange" unit="%" />
                </td>
            </tr>
        )
        // }
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather }
}

export default connect(mapStateToProps, null)(WeatherList)
// export default WeatherList