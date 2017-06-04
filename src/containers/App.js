import React, { Component } from 'react'

import Menu from '../components/Menu'
import About from '../components/About'
import menus from '../constants/menus'
import abouts from '../constants/abouts'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menus,
      abouts,
      selectedId: menus[0].id
    }
    this.menuClick = this.menuClick.bind(this)
  }

  menuClick(event) {
    event.preventDefault()
    this.setState({selectedId: event.target.id})
  }

  selectedMenu() {
    return this.state.menus.find((menu) =>
    (menu.id === this.state.selectedId)
    )
  }

  render() {
    let menuComponents = menus.map((menu) => {
      return (
        <Menu key={menu.id}
          data={menu}
          isSelected={this.state.selectedId === menu.id}
          handleClick={this.menuClick}/>
      )
    })

    let relevantAbouts = abouts.filter((about) =>
      (this.state.selectedId === about.menu_id)
    )

    return(
      <div>
        <div className="row">
          <div className="small-3 columns">
            {menuComponents}
          </div>
          <div className="small-9 columns">
            <About data={relevantAbouts} />
          </div>
        </div>
      </div>
    )
  }
}
export default App
