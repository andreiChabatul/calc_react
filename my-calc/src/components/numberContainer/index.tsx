import ItemNumber from '../itemNumberButton';
import numberControlArr from './data/dataNumber';
import './index.css';

const NumberContainer = () => {

    return (
        <div className='number-container'>
            {numberControlArr.map(control =>
                <ItemNumber value={control} />)
            }
        </div>
    )
}

export default NumberContainer;
