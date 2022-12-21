import './Button.css';

const Button = ({ text, color, equalArea, equalWidth, equalBorder}) => {
  return (
    <div
        className='button-container'
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