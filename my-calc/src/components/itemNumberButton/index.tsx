import calculator from '../../services/calculator';
import { propsNumberControl } from '../../type';
import './index.css';

const ItemNumber = (props: propsNumberControl) => {

    return (
        <div
            id={String(props.value)}
            onClick={(e) => calculator.setNumber(e.currentTarget.id)}
            className={`item-number-button ${props.value === 0 ? 'item-number-button_null' : ''}`}>
            <p className='item-number_text'>{props.value}</p>
        </div>
    )
}

export default ItemNumber;
