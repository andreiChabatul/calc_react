import './index.css';

const Display = () => {

    const value = '011+2';

    return (
        <div className='display-container'>
            <div className='display-text_container'>
                <p className='display_text'>{value}</p>
            </div>
        </div>
    )
}

export default Display;
