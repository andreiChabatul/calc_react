import './index.css';
import { useDrag } from 'react-dnd';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { delete_element, drag_monitor } from '../../store/slice';
import { TypeJSXElement } from '../doneArea/type';

const EqualsContainer = () => {

    const dispatch = useAppDispatch();

    const [{ isDragging }, dragRef] = useDrag({
        type: 'button-add',
        item: { value: TypeJSXElement.equal },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    useEffect(() => {
        dispatch(drag_monitor(isDragging))
    }, [isDragging]);

    return (
        <div
            onDoubleClick={() => dispatch(delete_element(<EqualsContainer />))}
            className={`equals-container ${isDragging ? 'container_drag' : ''}`} ref={dragRef}>
            <div className='equals-container_text'>
                <p className='equals_text'>=</p>
            </div>
        </div>
    )

}

export default EqualsContainer;
