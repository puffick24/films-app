import { useState } from 'react';
import style from '../../styles/FilmPage.module.css'

const RenderField = ({label, value, isEditing, onFieldChange}) => {
    const [inputValue, setInputValue] = useState(value);

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        onFieldChange(label, newValue);
    };

    return (
        <div className={style.render_field}>
            <span>{label}</span>
            {
                isEditing ? (
                <input value={inputValue} onChange={handleInputChange} />
                ) : (
                <span>{value}</span>
                )
            }
        </div>
    );
}

export default RenderField;