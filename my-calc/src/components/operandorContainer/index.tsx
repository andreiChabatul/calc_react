import ItemOperandor from '../itemOperandorButton';
import operandorArr from './data/dataOperandor';
import './index.css';

const OperandorContainer = () => {

    return (
        <div className='operandor-container'>
            {operandorArr.map((oper, index) =>
                <ItemOperandor value={oper} key={index} />
            )}
        </div>
    )
}

export default OperandorContainer;
