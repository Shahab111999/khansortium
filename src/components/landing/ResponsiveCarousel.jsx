import React, {StyleSheet, useState} from 'react'
import { StackedCarousel } from 'react-stacked-carousel'
import 'react-stacked-carousel/dist/index.css';
import  cards from '../../assets/data/vericalcards'

const App = () => {
  const [card, setCard] = useState(null);
  const onCardChange = (event) => {
    console.log("Card", event);
  }
  
  return (
    <div className="main" >
      <StackedCarousel
        autoRotate={false}
        onCardChange={onCardChange}
        containerClassName={"carousel_Container"}
        cardClassName="carousel_Card"
        leftButton={<button>{"<"}</button>}
        rightButton={<button>{">"}</button>}
      >
           {cards.map(card=>
            <div  className='CarouselCard'  key={cards.heading+ card.id}>
                     <img  src={card.img} alt="" />
            </div>
            )}  
      </StackedCarousel>
      </div>
  )
}
export default App