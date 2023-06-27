import logo from './logo.svg';
import './App.css';
import Cochet from './sport';

function Fiche3() {
  return (
    <div className="bloc6">
        <label><b>Sports</b></label>
        <Cochet sujet="Golf" />
        <Cochet sujet="Moto" />
        <Cochet sujet="Badminton" />
        <Cochet sujet="Baseball" />
        <Cochet sujet="Football" />
        <Cochet sujet="Socker" />
        <Cochet sujet="Hockey" />

    </div>
  );
}

export default Fiche3;
