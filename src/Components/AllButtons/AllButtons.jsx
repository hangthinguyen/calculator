import { useState } from 'react';
import Button from '../Button/Button';
import './AllButtons.css';

const AllButtons = () => {
    const [buttons, setButtons] = useState([
        {
            id: Math.random() * 1000,
            text: 'C',
            color: '#66A182'
        },
        {
            id: Math.random() * 1000,
            text: '+/-',
            color: '#66A182'
        },
        {
            id: Math.random() * 1000,
            text: '%',
            color: '#66A182'
        },
        {
            id: Math.random() * 1000,
            text: '/',
            color: '#F96900'
        },
        {
            id: Math.random() * 1000,
            text: '1',
            color: '#357266'
        },
        {
            id: Math.random() * 1000,
            text: '2',
            color: '#357266'
        },
        {
            id: Math.random() * 1000,
            text: '3',
            color: '#357266'
        },
        {
            id: Math.random() * 1000,
            text: 'X',
            color: '#F96900'
        },
        {
            id: Math.random() * 1000,
            text: '4',
            color: '#357266'
        },
        {
            id: Math.random() * 1000,
            text: '5',
            color: '#357266'
        },
        {
            id: Math.random() * 1000,
            text: '6',
            color: '#357266'
        },
        {
            id: Math.random() * 1000,
            text: '-',
            color: '#F96900'
        },
        {
            id: Math.random() * 1000,
            text: '7',
            color: '#357266'
        },
        {
            id: Math.random() * 1000,
            text: '8',
            color: '#357266'
        },
        {
            id: Math.random() * 1000,
            text: '9',
            color: '#357266'
        },
        {
            id: Math.random() * 1000,
            text: '+',
            color: '#F96900'
        },
        {
            id: Math.random() * 1000,
            text: '0',
            color: '#357266'
        },
        {
            id: Math.random() * 1000,
            text: '.',
            color: '#357266'
        },
        {
            id: Math.random() * 1000,
            text: '=',
            color: '#F96900',
            equalBorder: '50px',
            equalWidth: '128px',
            equalArea: '5/3/span 1/span 2'
        },
    ])
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
            />
        )}
    </div>
  )
}

export default AllButtons;