import calculator from '../../services/calculator';
import { useAppSelector } from '../../store';
import { propsOperandor } from '../../type';
import './index.css';

const ItemOperandor = (props: propsOperandor) => {

    const { IsRuntime } = useAppSelector(state => state.appState)

    return (
        <div
            id={String(props.value)}
            onClick={(e) => { if (IsRuntime) calculator.setOperandor(e.currentTarget.id) }}
            className='item-operandor-container'>
            <p className='item-operandor_text'>{props.value}</p>
        </div>
    )
}

export default ItemOperandor;
