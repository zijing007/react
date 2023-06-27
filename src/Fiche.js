import logo from './logo.svg';
import './App.css';
import Label from './Label';

function Fiche() {
  return (
    <div className="bloc1">
      <p className="entete">IdenMté:</p>
        <Label sujet="Nom" />
        <Label sujet="Age" />
        <Label sujet="NAS" />
    </div>
  
  );
}

export default Fiche;
