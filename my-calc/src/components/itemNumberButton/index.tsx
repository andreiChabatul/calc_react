import calculator from '../../services/calculator';
import { useAppSelector } from '../../store';
import { propsNumberControl } from '../../type';
import './index.css';

const ItemNumber = (props: propsNumberControl) => {

    const { IsRuntime } = useAppSelector(state => state.appState)

    return (
        <div
            id={String(props.value)}
            onClick={(e) => { if (IsRuntime) calculator.setNumber(e.currentTarget.id) }}
            className={`item-number-button ${props.value === 0 ? 'item-number-button_null' : ''}`}>
            <p className='item-number_text'>{props.value}</p>
        </div>
    )
}

export default ItemNumber;
