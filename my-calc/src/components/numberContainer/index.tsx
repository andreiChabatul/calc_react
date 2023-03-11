import { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { useAppDispatch } from '../../store';
import { delete_element, drag_monitor } from '../../store/slice';
import { TypeJSXElement } from '../doneArea/type';
import ItemNumber from '../itemNumberButton';
import numberControlArr from './data/dataNumber';
import './index.css';

const NumberContainer = () => {

    const dispatch = useAppDispatch();

    const [{ isDragging }, dragRef] = useDrag({
        type: 'button-add',
        item: { value: TypeJSXElement.buttonNumber },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    useEffect(() => {
        dispatch(drag_monitor(isDragging))
    }, [isDragging]);

    return (
        <div
            className='number-container'
            ref={dragRef}
            onDoubleClick={() => dispatch(delete_element(<NumberContainer />))}
        >
            {numberControlArr.map((control, index) =>
                <ItemNumber value={control} key={index} />)
            }
        </div>
    )
}

export default NumberContainer;
