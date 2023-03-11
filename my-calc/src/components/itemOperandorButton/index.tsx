import './index.css';
import IOperandor from './type';

const ItemOperandor = (props: IOperandor) => {


    const clickHandler = () => {
        console.log(props.value)
    }

    return (
        <div onClick={clickHandler} className='item-operandor-container'>
            <p className='item-operandor_text'>{props.value}</p>
        </div>
    )
}

export default ItemOperandor;
