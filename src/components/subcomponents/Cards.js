import React from 'react'
import Card from "./Card";
import image1 from "../img/htmlimg.png";
import image2 from "../img/cssimg.png";
import image3 from "../img/javascriptimg.png";
import image4 from "../img/reactimg.png";
const cards=[
  {
    id:1,
    title:"HTML",
    image: image1,
  },
  {
    id:2,
    title:"CSS",
    image: image2,
  },
  {
    id:3,
    title:"JavaScript",
    image: image3,
  },
  {
    id:4,
    title:"REACT",
    image: image4,
  }
]
function Cards() {
  return (
    <div className='container d-flex justify-content-center h-100 align-items-center'>
      <div className='row'>
      <h1 className="titskills">SKILLS</h1>
        {
          cards.map(card =>(
            <div className="col-md-3" key={card.id}>
              <Card title={card.title} imageSource={card.image}/>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Cards;