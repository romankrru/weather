import React, { Component, Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import { CITIES } from '../constants'
import styled, { keyframes } from 'styled-components'
import { connect } from 'react-redux'
import { selectCity } from '../actions'

const slideUp = keyframes`
  from {
    transform:
    translate(100px)
    scale(0.8, 0.8);
  }

  to {
    transform:
    translate(0px)
    scale(1, 1);
  }
  `

const slideDown = keyframes`
  to {
    transform:
    translate(100px)
    scale(0.8, 0.8);
  }
  `

const StyledCityCard = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  position: absolute;
  cursor: pointer;
  z-index: ${props => {
    if (props.id === 524894) {
      switch (props.selectedCity) {
        case 524894:
          return 2
        case 536203:
          return 1
        default:
          return 2
      }
    } else if (props.id === 536203) {
      switch (props.selectedCity) {
        case 524894:
          return 1
        case 536203:
          return 2
        default:
          return 1
      }      
    }
  }};
  animation: ${props => {
    if (props.id === 524894) {
      switch (props.selectedCity) {
        case 536203:
          return `${slideDown} 0.3s linear forwards`
        case 524894:
          return `${slideUp} 0.3s linear forwards`
        default:
          return ''
      }
    } else if (props.id === 536203) {
      switch (props.selectedCity) {
        case 536203:
          return `${slideUp} 0.3s linear forwards`
        case 524894:
          return `${slideDown} 0.3s linear forwards`
        default:
          return ''
      }
    }
  }};
`

class CityCard extends Component {
  render() {
    const { isLoading, selectCity, selectedCity, index, id } = this.props
    return isLoading ? <h1>Loading...</h1> : (
      <StyledCityCard onClick={() => selectCity(id)} selectedCity={selectedCity} index={index} id={id}>
        <Header id={id} />
        <Footer id={id} />
      </StyledCityCard>
    )
  }
}

export default connect(
  (state) => ({
    selectedCity: state.selectedCity,
    isLoading: state.isLoading,
  }),
  { selectCity }
)(CityCard)