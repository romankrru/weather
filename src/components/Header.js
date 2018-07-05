import React, { Component } from 'react'
import ColorOverlay from './ColorOverlay'
import styled from 'styled-components'

const StyledHeader = styled.div`
  background-image: ${props => {
    switch (props.id) {
      case 524894:
        return 'url(https://www.riotgames.com/darkroom/1440/e729557d83532c5777833a6b883e1969:49a8674cebb9aff914c6e48eab863f0f/shutterstock-599314052.jpg);'
      case 536203:
        return 'url(https://img.gazeta.ru/files3/949/10177949/shutterstock_199494515-pic905-895x505-25630.jpg);'
    }
  }};
  background-size: cover;
  width: 100%;
  height: 60%;
  position: relative;
`

class Header extends Component {
  render() {
    const { id } = this.props
    return (
      <StyledHeader id={id}>
        <ColorOverlay id={id} />
      </StyledHeader>
    )
  }
}

export default Header