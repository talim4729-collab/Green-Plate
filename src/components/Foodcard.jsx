import React from 'react';

const FoodCard = ({ heading, imageSrc, dishes, reverse }) => {
  return (
    <section>
      <div style={{ textAlign: 'center' }}>
        <h1>{heading}</h1>
      </div>
      <div 
        className={"food-container"}
        style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}
      >
        <div style={{ flex: '1' ,paddingTop : '40px'}}>
          <img src={imageSrc} alt={heading} style={{ width: '100%' }} />
        </div>
        <div style={{ flex: '1' }}>
          {dishes.map((dish, index) => (
            <div key={index}>
              <h2>{dish.name} ${dish.price}</h2>
              <p>{dish.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCard;