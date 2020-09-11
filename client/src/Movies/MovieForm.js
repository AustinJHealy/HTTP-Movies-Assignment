import React, {useState} from "react";
//import axios from "axios";


const MovieForm = () => {
    const [formState, setFormState] = useState({
    title: "",
    director: "",
    metascore: "",
    stars: "",
  });
const inputHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: [event.target.value] })
};
const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    //axios
      //.post("https://reqres.in/api/users", formState)
      //.then((response) => //console.log(response))
      //.catch((err) => console.log(err))
      
      //setMovieList([...MovieList, formState])
  };
return (
    <div className="form-container">
      <p>New Movie</p>
      <form onSubmit={submitHandler}>
        
        <label htmlFor="title">
          Title
          <input
            type="text"
            name="title"
            id="title"
            value={formState.title}
            onChange={inputHandler}
          />
        </label>
        
        <label htmlFor="director">
          Director
         
          <input
            type="text"
            name="director"
            id="director"
            value={formState.director}
            onChange={inputHandler}
          />
        </label>
       
        <label htmlFor="metascore">
          Metascore
        
          <input
            type="text"
            name="metascore"
            id="metascore"
            value={formState.metascore}
            onChange={inputHandler}
          />
        </label>
        
        <label htmlFor="stars">
          Actors
          <input
            type="text"
            name="stars"
            id="stars"
            value={formState.stars}
            onChange={inputHandler}
          />
        </label>
        <input className="submit" type="submit" />
      </form>
</div>
)
 
  
}
export default MovieForm