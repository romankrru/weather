import React, { Component } from 'react'
import styled, { injectGlobal, keyframes } from 'styled-components'
import { connect } from 'react-redux'
import { getData, setListOfCities } from '../actions'
import CityCard from './CityCard'

const Global = injectGlobal`
  @import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto');

  body {
    background-color: black;
    font-family: Roboto, sans-serif;        
    color: white;
  }
`

class App extends Component {
  render() {
    const {
      selectedCity,
      cities
    } = this.props
    
    return (
      <div>
        {cities.map((item, i) => {
          return <CityCard
            index={i}
            key={item}
            id={item} />
        })}
      </div>
    )
  }

  componentWillMount() {
    const { setListOfCities } = this.props
    setListOfCities()
  }

  componentDidMount() {
    const { getData } = this.props
    getData()
  }
}

export default connect(
  (state) => ({
    cities: state.cities
  }),
  { getData, setListOfCities }
)(App)