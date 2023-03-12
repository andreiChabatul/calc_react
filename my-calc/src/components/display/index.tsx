import { useDrag } from 'react-dnd';
import { useAppDispatch, useAppSelector } from '../../store';
import { delete_element, drag_monitor } from '../../store/slice';
import { useEffect } from 'react';
import './index.css';
import { TypeJSXElement } from '../doneArea/type';
import { JSXdrop } from '../../type';


const Display = (props: JSXdrop) => {

    const value = '011+2';
    const dispatch = useAppDispatch();
    const { dropArr } = useAppSelector(state => state.appState);
    const IsDoneArea = (!!dropArr.filter(elem => elem.type.name === TypeJSXElement.display).length);

    const [{ isDragging }, dragRef] = useDrag({
        type: 'button-add',
        item: { value: TypeJSXElement.display },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    useEffect(() => {
        dispatch(drag_monitor(isDragging));
    }, [isDragging]);

    return (
        <div
            onDoubleClick={() => dispatch(delete_element(<Display />))}
            className={`display-container
            ${isDragging ? 'container_drag' : ''}
            ${props.value && IsDoneArea ? 'container__disabble' : ''}
            `}
            ref={!IsDoneArea ? dragRef : null}>
            <div className='display-text_container'>
                <p className='display_text'>{value}</p>
            </div >
        </div >
    )
}

export default Display;
