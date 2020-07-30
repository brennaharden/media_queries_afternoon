import React from 'react';

class Nav extends React.Component {
    constructor(){
      super();
      this.state = {
        dropDownVisible: false
      }
    }
    toggleDropDown = () => {
        this.setState({
            dropDownVisible: !this.state.dropDownVisible
        })
    }

    render(){
    
    return(
        <div className="navbar">
        <nav className="desktop-menu">
            <span>SERVICES</span>
            <span>PORTFOLIO</span>
            <span>ABOUT</span>
            <span>TEAM</span>
            <span>CONTACT</span>
        </nav>
        <div className="dropdown" onClick={this.toggleDropDown}>MENU &#9776;</div>
        {this.state.dropDownVisible ? (
            <nav className="mobile-menu">
            <span>SERVICES</span>
            <span>PORTFOLIO</span>
            <span>ABOUT</span>
            <span>TEAM</span>
            <span>CONTACT</span>
        </nav>
        ) : null }
        </div>
    )
}
}

export default Nav