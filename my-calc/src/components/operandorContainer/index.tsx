import { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { useAppDispatch } from '../../store';
import { delete_element, drag_monitor } from '../../store/slice';
import { TypeJSXElement } from '../doneArea/type';
import ItemOperandor from '../itemOperandorButton';
import operandorArr from './data/dataOperandor';
import './index.css';

const OperandorContainer = () => {

    const dispatch = useAppDispatch();

    const [{ isDragging }, dragRef] = useDrag({
        type: 'button-add',
        item: { value: TypeJSXElement.buttonOperandor },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    useEffect(() => {
        dispatch(drag_monitor(isDragging))
    }, [isDragging]);

    return (
        <div
            ref={dragRef}
            className='operandor-container'
            onDoubleClick={() => dispatch(delete_element(<OperandorContainer />))}
        >
            {operandorArr.map((oper, index) =>
                <ItemOperandor value={oper} key={index} />
            )}
        </div>
    )
}

export default OperandorContainer;
