import Button from '../Button/Button';
import './AllButtons.css';

const AllButtons = ({ buttons, onClick}) => {

  return (
    <div className='buttons-container'>
        {buttons.map((button) =>
            <Button
                key={button.id}
                id={button.id}
                text={button.text}
                color={button.color}
                equalBorder={button.equalBorder}
                equalWidth={button.equalWidth}
                equalArea={button.equalArea}
                onClick={onClick}
            />
        )}
    </div>
  )
}

export default AllButtons;