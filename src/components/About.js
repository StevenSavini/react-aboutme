import React from 'react'

const About = (props) => (
  <div className="row mbl">
    <div className="small-12 columns abt"><h3>{props.data.name}</h3></div>

    <div class="small-12 columns imgContainer abt">
    <div className="small-6 columns"><img src={props.data.image} alt={props.data.name} /></div>
    <div className="small-6 columns"><img src={props.data.otherImage}/></div>
    </div>
    <div className="small-12 columns abt">{props.data.description}</div>
  </div>
)

const Abouts = (props) => {
  let abouts = props.data.map((about, i) => {
      return <About key={`about-${i}`} data={about} />
    })
    return <div>{abouts}</div>
  }



export default Abouts
