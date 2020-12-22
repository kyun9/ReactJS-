import React from "react";
import PropTypes from "prop-types";
import "./App.css";

function Movie({ year, title, summary, poster }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movies_movie">
        <h3 class="movies__title">{title}</h3>
        <h5 class="movies__year">{year}</h5>
        <h5 class="movies__summary">{summary}</h5>
      </div>
    </div>
  );
}
Movie.protoTypes = {
  id: PropTypes.number.isRequired,
  yaer: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
