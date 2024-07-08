import React from 'react';
import './Main.css';

function Main() {
  const items = [
    { title: 'Card 1', description: 'This is the description for Card 1.' },
    { title: 'Card 2', description: 'This is the description for Card 2.' },
    { title: 'Card 3', description: 'This is the description for Card 3.' },
  ];

  return (
    <div>
      <div className='itemsContainer'>
        {items.map((item) => {
          return (
            <div className='itemWrapper'>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
