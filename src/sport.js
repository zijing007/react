import logo from './logo.svg';
import './App.css';
import Label from './Label';
import ReactDOM from 'react-dom';
import $ from "jquery";

function action(e) {
  console.clear();
  const selectedSports = Array.from(document.querySelectorAll('input[name="sport"]:checked')).map(checkbox => checkbox.value);
  const selectedSportsString = selectedSports.join(', ');
  $('#sport').html(selectedSportsString);
}
function Cochet(props) {
  return (

    <div >
        
        <input type="checkbox" name="sport" value={props.sujet} onChange={action}/>
        {props.sujet}
            
    </div>    
  );
}

export default Cochet;
