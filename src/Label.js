import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import './App.css';

function action(e) {
  console.clear();
  const valeur = e.target.value;
  const ident = e.target.name;

  console.log("Nom" + ident);
  console.log("valeur: " + valeur);

  let Location = ""; 

  switch (ident) {
    case "nom":
      Location = "#nom"; 
      break;
    case "age":
      Location = "#age";
      break;
    case "nas":
      Location = "#nas";
      break;
   
  }

  $(Location).html(valeur); 

  console.log("valeur: " + valeur);
}


function Label(props) {
  console.log(props);
  return (<div>
            <label><b>{props.sujet}</b></label>
            <input type="text" id="data" name={props.sujet.toLowerCase()} size="24" onBlur={action}/>
          </div>
          );
}

export default Label;
