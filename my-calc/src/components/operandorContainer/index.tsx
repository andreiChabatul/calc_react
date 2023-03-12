import { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { operandorArr } from '../../const';
import { useAppDispatch, useAppSelector } from '../../store';
import { delete_element, drag_monitor } from '../../store/slice';
import { JSXdrop } from '../../type';
import { TypeJSXElement } from './../../type';
import ItemOperandor from '../itemOperandorButton';
import './index.css';

const OperandorContainer = (props: JSXdrop) => {

    const dispatch = useAppDispatch();
    const { dropArr } = useAppSelector(state => state.appState);
    const IsDoneArea = (!!dropArr.filter(elem => elem.type.name === TypeJSXElement.buttonOperandor).length);

    const [{ isDragging }, dragRef] = useDrag({
        type: 'button-add',
        item: { value: TypeJSXElement.buttonOperandor },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    useEffect(() => {
        dispatch(drag_monitor(isDragging))
    }, [isDragging, dispatch]);

    return (
        <div
            ref={!IsDoneArea ? dragRef : null}
            className={`operandor-container
            ${isDragging ? 'container_drag' : ''}
            ${props.value && IsDoneArea ? 'container__disabble' : ''}`}
            onDoubleClick={() => dispatch(delete_element(<OperandorContainer />))}
        >
            {operandorArr.map((oper, index) =>
                <ItemOperandor value={oper} key={index} />
            )}
        </div>
    )
}

export default OperandorContainer;
