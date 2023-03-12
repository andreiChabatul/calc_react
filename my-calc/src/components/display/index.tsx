import { useDrag } from 'react-dnd';
import { useAppDispatch, useAppSelector } from '../../store';
import { delete_element, drag_monitor } from '../../store/slice';
import { useEffect } from 'react';
import './index.css';
import { TypeJSXElement } from '../doneArea/type';
import { JSXdrop } from '../../type';

const Display = (props: JSXdrop) => {

    const dispatch = useAppDispatch();
    const { dropArr, result, IsResultText, resultCalc } = useAppSelector(state => state.appState);
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
                {IsResultText && <p className='display_text'>{result}</p>}
                <p className={`display_result ${IsResultText ? 'display_result__text' : ''}`}>
                    {resultCalc ? resultCalc : '0'}
                </p>
            </div >
        </div >
    )
}

export default Display;
