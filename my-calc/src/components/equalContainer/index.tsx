import './index.css';
import { useDrag } from 'react-dnd';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { delete_element, drag_monitor } from '../../store/slice';
import { TypeJSXElement } from './../../type';
import { JSXdrop } from '../../type';
import calculator from '../../services/calculator';

const EqualsContainer = (props: JSXdrop) => {

    const dispatch = useAppDispatch();
    const { dropArr, IsRuntime } = useAppSelector(state => state.appState);
    const IsDoneArea = (!!dropArr.filter(elem => elem.key === TypeJSXElement.equal).length);

    const [{ isDragging }, dragRef] = useDrag({
        type: 'button-add',
        item: { value: TypeJSXElement.equal },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    useEffect(() => {
        dispatch(drag_monitor(isDragging))
    }, [isDragging, dispatch]);

    return (
        <div
            onClick={() => { if (IsRuntime) calculator.egualClick() }}
            onDoubleClick={() => dispatch(delete_element(<EqualsContainer key={'EqualsContainer'} />))}
            className={`equals-container
            ${isDragging ? 'container_drag' : ''}
            ${props.value && IsDoneArea ? 'container__disabble' : ''}`}
            ref={!IsDoneArea ? dragRef : null}>
            <div className='equals-container_text'>
                <p className='equals_text'>=</p>
            </div>
        </div>
    )

}

export default EqualsContainer;
