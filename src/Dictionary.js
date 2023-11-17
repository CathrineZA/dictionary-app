import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

<<<<<<< HEAD
export default function Dictionary(props) {
  let [keyword, setKeyword] = useState("sky");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
=======
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
>>>>>>> b299c83db6f2cd8ef49c5c835b4c703f8bcd7e4f

  function handleResponse(response) {
    setResults(response.data[0]);
  }

<<<<<<< HEAD
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
=======
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    console.log(apiUrl);
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => console.log(error));
>>>>>>> b299c83db6f2cd8ef49c5c835b4c703f8bcd7e4f
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

<<<<<<< HEAD
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: sky, wine, sunset, flower...
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    loaded();
    return "Loading";
  }
=======
  return (
    <div className="Dictionary">
      <h2>What word you want to look up?</h2>
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
        <input type="submit" />
      </form>
      <Results results={results} />
    </div>
  );
>>>>>>> b299c83db6f2cd8ef49c5c835b4c703f8bcd7e4f
}
