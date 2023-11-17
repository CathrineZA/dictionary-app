import React from "react";
import Meaning from "./Meaning";
<<<<<<< HEAD
import Phonetic from "./Phonetic";
import "./Results.css";
=======
>>>>>>> b299c83db6f2cd8ef49c5c835b4c703f8bcd7e4f

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
<<<<<<< HEAD
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
=======
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
>>>>>>> b299c83db6f2cd8ef49c5c835b4c703f8bcd7e4f
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
