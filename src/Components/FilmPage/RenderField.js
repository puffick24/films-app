import { useState } from 'react';
import style from './FilmPage.module.css'

const RenderField = ({ label, value, isEditing, onFieldChange,field,touched,errors}) => {
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
                    <div>
                        <input value={inputValue} onChange={handleInputChange} {...field}/>
                    {/* {errors[field.Production] && touched[field.Production] && (<div>{errors[field.Production]}</div>)} */}
                    </div>
                ) : (
                    <p>{value}</p>
                )
            }
            </div>
    );
}

export default RenderField;