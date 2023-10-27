function Movies(props) {
    return (
      <div>
        <h2>Movie Title: {props.movieTitle}</h2>
        <p>Run Time: {props.runTime} </p>
      </div>
    );
  }
  
  export default Movies;