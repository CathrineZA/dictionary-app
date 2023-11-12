import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    console.log(apiUrl);
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => console.log(error));
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

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
}
