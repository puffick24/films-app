import { useState } from 'react';
import style from './FilmPage.module.css'

const RenderField = ({label, value, isEditing, onFieldChange, validationSchema, filmInfo}) => {
    const [inputValue, setInputValue] = useState(value);

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        onFieldChange(label, newValue);
    };

    return (
            <div className={style.render_field}>
            <p>{label}</p>
            {
                isEditing ? (
                <input value={inputValue} onChange={handleInputChange} />
                ) : (
                <p>{value}</p>
                )
            }
            </div>
    );
}

export default RenderField;