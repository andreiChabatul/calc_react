import './index.css';
import { useDrop } from 'react-dnd';
import { useAppDispatch, useAppSelector } from '../../store';
import { drop_add } from '../../store/slice';
import Display from '../display';
import EqualsContainer from '../equalContainer';
import { dropItem, TypeJSXElement } from './type';
import NumberContainer from '../numberContainer';
import OperandorContainer from '../operandorContainer';


const DoneArea = () => {

    const { IsDragMonitor, dropArr } = useAppSelector(state => state.appState)
    const dispatch = useAppDispatch();

    const [, dropRef] = useDrop({
        accept: 'button-add',
        drop: (item: dropItem) => {
            switch (item.value) {
                case TypeJSXElement.equal:
                    dispatch(drop_add(<EqualsContainer value={false} />))
                    break;
                case TypeJSXElement.display:
                    dispatch(drop_add(<Display value={false} />))
                    break;
                case TypeJSXElement.buttonNumber:
                    dispatch(drop_add(<NumberContainer value={false} />))
                    break;
                case TypeJSXElement.buttonOperandor:
                    dispatch(drop_add(<OperandorContainer value={false} />))
                    break;
            }
        },
    });

    return (
        <div className={`done-area-container ${IsDragMonitor ? 'display-drop_drag' : ''}`} ref={dropRef}>
            {dropArr.map(elem => elem)}
            {dropArr.length === 0 && <div className='area-drop area-drop_drag'>
                <div className='area-drop_content'>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.7778 1V5.44444" stroke="black" strokeWidth="2" strokeLinecap="round" />
                        <path d="M21 3.22222L16.5556 3.22222" stroke="black" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12.3889 3.22222H5C2.79086 3.22222 1 5.01309 1 7.22223V16.2778M18.7778 9.61111V17C18.7778 19.2091 16.9869 21 14.7778 21H5C2.79086 21 1 19.2091 1 17V16.2778M1 16.2778L4.83824 12.4395C6.40034 10.8774 8.93298 10.8774 10.4951 12.4395C11.8961 13.8406 13.5664 15.5108 14.8889 16.8333" stroke="black" strokeWidth="2" strokeLinecap="round" />
                        <path d="M18.7778 14.6111L18.2729 14.1062C16.7108 12.5441 14.1781 12.5441 12.616 14.1062L12.3889 14.3333" stroke="black" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="12.1111" cy="7.66667" r="0.555556" fill="black" />
                    </svg>
                    <span className='area-drop_content__title'>Перетащите сюда</span>
                    <span className='area-drop_content__text'>любой элемент из левой панели</span>
                </div>
            </div>}
        </div>
    )

}

export default DoneArea;
