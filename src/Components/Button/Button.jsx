import './Button.css';

const Button = ({ button, onClick}) => {

  return (
    <div
        className='button-container'
        onClick={() => onClick(button)}
        style={{
            display: 'grid',
            backgroundColor: button.color,
            gridArea: button.equalArea,
            width: button.equalWidth,
            borderRadius: button.equalBorder
        }}
    >
        {button.text}
    </div>
  )
}

export default Button;