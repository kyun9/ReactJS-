import React from "react";
import PropTypes from "prop-types";

function Food({ name, rating }) {
  return (
    <div>
      <h1>I LIKE {name}</h1>
      <h4>{rating}/5.0</h4>
    </div>);
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const foodILike = [
  { id: 1, name: "aa", rating: 5.0 },
  { id: 2, name: "bb", rating: 4.9 },
  { id: 3, name: "c", rating: 4.7 }
];

function renderFood(dish) {
  console.log(dish);
  return <Food key={dish.id} name={dish.name} />
};

function App() {
  return <div>
    {foodILike.map(dish => (
      <Food
        key={dish.id}
        name={dish.name}
        rating={dish.rating}
      />
    ))}
  </div>
}

export default App;
