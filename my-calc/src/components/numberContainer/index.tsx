import { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { useAppDispatch, useAppSelector } from '../../store';
import { delete_element, drag_monitor } from '../../store/slice';
import { numberControlArr } from '../../const';
import { TypeJSXElement } from './../../type';
import ItemNumber from '../itemNumberButton';
import './index.css';
import { JSXdrop } from '../../type';

const NumberContainer = (props: JSXdrop) => {

    const dispatch = useAppDispatch();
    const { dropArr } = useAppSelector(state => state.appState);
    const IsDoneArea = (!!dropArr.filter(elem => elem.key === TypeJSXElement.buttonNumber).length);

    const [{ isDragging }, dragRef] = useDrag({
        type: 'button-add',
        item: { value: TypeJSXElement.buttonNumber },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    useEffect(() => {
        dispatch(drag_monitor(isDragging))
    }, [isDragging, dispatch]);

    return (
        <div
            className={`number-container
            ${isDragging ? 'container_drag' : ''}
            ${props.value && IsDoneArea ? 'container__disabble' : ''}`}
            ref={!IsDoneArea ? dragRef : null}
            onDoubleClick={() => dispatch(delete_element(<NumberContainer key={'NumberContainer'} />))}
        >
            {numberControlArr.map((control, index) =>
                <ItemNumber value={control} key={index} />)
            }
        </div>
    )
}

export default NumberContainer;
