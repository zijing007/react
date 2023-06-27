
import './App.css';

import Radio2 from './Trans';
import Label from './Label';
import Radio from './Radio';

function Fiche2(props) {
  return (
    <div className="bloc5">
        <label><b>Transmission</b></label>
        <Radio2 sujet="Manuelle" />
        <Radio2 sujet="Automatique" />
        <Radio2 sujet="Manuelle 4 roues motrices" />
        <Radio2 sujet="Automatique 4 roues motrices" />
    </div>
  );
}

export default Fiche2;
