import React from 'react'

const Menu = (props) => (
  <div className="small-12 columns">
    <h3>
      <a href="#" onClick={props.handleClick} id={props.data.id}>
        {props.data.name}
      </a>
    </h3>
  </div>
)

export default Menu
