import React from 'react'

const Menu = (props) => (
  <div className="small-12 columns menu">
  <div className={ props.isSelected ? "row selected" : "row"}>
    <h2 className="menuText">
      <a href="#" onClick={props.handleClick} id={props.data.id}>
        {props.data.name}
      </a>
    </h2>
  </div>
</div>
)

export default Menu
