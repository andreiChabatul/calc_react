import calculator from '../../services/calculator';
import { propsOperandor } from '../../type';
import './index.css';

const ItemOperandor = (props: propsOperandor) => {


    const clickHandler = () => {
        console.log(props.value)
    }

    return (
        <div
            id={String(props.value)}
            onClick={(e) => calculator.setOperandor(e.currentTarget.id)}
            className='item-operandor-container'>
            <p className='item-operandor_text'>{props.value}</p>
        </div>
    )
}

export default ItemOperandor;
