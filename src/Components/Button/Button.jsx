import './Button.css';

const Button = ({ text, color, equalArea, equalWidth, equalBorder, onClick}) => {

  return (
    <div
        className='button-container'
        onClick={onClick}
        style={{
            display: 'grid',
            backgroundColor: color,
            gridArea: equalArea,
            width: equalWidth,
            borderRadius: equalBorder
        }}
    >
        {text}
    </div>
  )
}

export default Button;