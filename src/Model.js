import React, { useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import $ from "jquery";

function action(e) {
  console.clear();
  const valeur = e.target.value;
  $('#model').html(valeur);
}


function Selete() {
  
return (
  <div className="bloc4">
    <label><b>modèle d'auto</b></label>
    <select style={{ width: '150px' }} onChange={action}>
    
    <option value="" > </option>
    <option value="BMW">BMW</option>
    <option value="AUDI">AUDI</option>
    <option value="BENZ">BENZ</option>
  </select>
  
    </div>
  );
}

export default Selete;
