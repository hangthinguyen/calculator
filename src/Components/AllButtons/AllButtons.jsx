import Button from '../Button/Button';
import './AllButtons.css';

const AllButtons = ({ buttons, onClick}) => {

  return (
    <div className='buttons-container'>
        {buttons.map((button) =>
            <Button
                key={button.id}
                button={button}
                id={button.id}
                onClick={onClick}
            />
        )}
    </div>
  )
}

export default AllButtons;