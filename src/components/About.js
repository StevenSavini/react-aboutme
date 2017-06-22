import React from 'react'

const About = (props) => (
  <div className="row">
    <div className="small-12 columns">
      <h3 className="aboutText">{props.data.name}</h3>
      <hr></hr>
      <h5 className="aboutText">{props.data.description}</h5>
      <hr></hr>
    </div>

    <div className="small-12 columns imgContainer aboutText">
      <div className="small-12 columns"><a href={props.data.imageLink}><img src={props.data.image} alt={props.data.name} /></a></div>
      <hr></hr>
      <div className="small-12 columns"><a href={props.data.otherImageLink}><img src={props.data.otherImage}/></a></div>
    </div>
  </div>
)

const Abouts = (props) => {
  let abouts = props.data.map((about, i) => {
      return <About key={`about-${i}`} data={about} />
  })
  return <div>{abouts}</div>
}



export default Abouts
