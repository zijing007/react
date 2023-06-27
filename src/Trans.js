import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import $ from "jquery";

function action(e) {
  console.clear();
  const valeur = e.target.value;
  $('#trans').html(valeur);
}

function Radio2(props) {
  return (
    <div className="App">
      <div className="App">
            <input type="radio" name="trans" value={props.sujet} onChange={action}/>
            {props.sujet}
            
          </div>
    </div>
  );
}

export default Radio2;
