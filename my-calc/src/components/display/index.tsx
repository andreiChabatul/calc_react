import { useDrag } from 'react-dnd';
import { useAppDispatch } from '../../store';
import { delete_element, drag_monitor, drop_add } from '../../store/slice';
import { useEffect } from 'react';
import './index.css';
import { TypeJSXElement } from '../doneArea/type';

const Display = () => {

    const value = '011+2';

    const dispatch = useAppDispatch();

    const [{ isDragging }, dragRef] = useDrag({
        type: 'button-add',
        item: { value: TypeJSXElement.display },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    useEffect(() => {
        dispatch(drag_monitor(isDragging))
    }, [isDragging]);

    return (
        <div
            onDoubleClick={() => dispatch(delete_element(<Display />))}
            className={`display-container ${isDragging ? 'container_drag' : ''}`} ref={dragRef}>
            <div className='display-text_container'>
                <p className='display_text'>{value}</p>
            </div >
        </div >
    )
}

export default Display;
