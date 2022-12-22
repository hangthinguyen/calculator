import AllButtons from '../AllButtons/AllButtons';
import './NumbersButtonsScreen.css';

const NumbersButtonsScreen = ({ buttons, onClick }) => {
  return (
    <div>
      <AllButtons buttons={buttons} onClick={onClick} />
    </div>
  )
}

export default NumbersButtonsScreen;