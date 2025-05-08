import React from 'react';
import './App.css';
import ResturantCard1 from './components/ResturantCard1';

function App() {
  const ResturantData = [
    {
      id: 1,
      name: 'Ashoka',
      image: 'https://via.placeholder.com/150',
      Rating: 4.5,
      Location: 'Hassan',
      cuisine: 'South Indian',
    },
    {
      id: 2,
      name: 'Udupi Grand',
      image: 'https://via.placeholder.com/150',
      Rating: 4.0,
      Location: 'Mysore',
      cuisine: 'South Indian',
    },
  ];

  return (
    <>
      <h1>Restaurant List</h1>
      <div className="restaurant-container">
        {ResturantData.map((res) => (
          <ResturantCard1
            key={res.id}
            name={res.name}
            image={res.image}
            cuisine={res.cuisine}
            rating={res.Rating}
            address={res.Location}
          />
        ))}
      </div>
    </>
  );
}

export default App;
