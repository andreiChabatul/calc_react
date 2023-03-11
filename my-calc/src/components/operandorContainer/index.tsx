import ItemOperandor from '../itemOperandorButton';
import operandorArr from './data/dataOperandor';
import './index.css';

const OperandorContainer = () => {

    return (
        <div className='operandor-container'>
            {operandorArr.map(oper =>
                <ItemOperandor value={oper} />
            )}
        </div>
    )
}

export default OperandorContainer;
