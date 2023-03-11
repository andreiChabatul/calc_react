import ItemNumber from '../itemNumberButton';
import numberControlArr from './data/dataNumber';
import './index.css';

const NumberContainer = () => {

    return (
        <div className='number-container'>
            {numberControlArr.map((control, index) =>
                <ItemNumber value={control} key={index} />)
            }
        </div>
    )
}

export default NumberContainer;
