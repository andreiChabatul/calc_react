import { propsNumberControl } from '../../type';
import './index.css';

const ItemNumber = (props: propsNumberControl) => {

    return (
        <div className={`item-number-button ${props.value === 0 ? 'item-number-button_null' : ''}`}>
            <p className='item-number_text'>{props.value}</p>
        </div>
    )
}

export default ItemNumber;
