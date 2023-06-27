import logo from './logo.svg';
import ReactDOM from 'react-dom';
import $ from "jquery";
import './App.css';
function action(e) {
  console.clear();
  const valeur = e.target.value;

  switch (valeur) {
    case "Homme":
      Location = "#sex"; 
      break;
    case "Femme":
      Location = "#sex";
      break;
      default:
        break;

   
  }

  $(Location).html(valeur); 


}
function Radio() {
  return (
    <div className="bloc2">
            <label><b>Sexe</b></label>
            <input type="radio" name="gender" value="Homme" onChange={action}/>
            Homme
            <input type="radio" name="gender" value="Femme" onChange={action}/>
            Femme
          </div>
  );
}

export default Radio;
