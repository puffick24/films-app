import { useState } from 'react';
import style from './FilmPage.module.css'
import PropTypes from 'prop-types'

const RenderField = ({ label, value, isEditing, onFieldChange}) => {
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
                        <input value={inputValue} onChange={handleInputChange}/>
                    // {/* {errors[field.Production] && touched[field.Production] && (<div>{errors[field.Production]}</div>)} */}
                ) : (
                    <p>{value}</p>
                )
            }
            </div>
    );
}

RenderField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    isEditing: PropTypes.bool.isRequired,
    onFieldChange: PropTypes.func.isRequired
}

export default RenderField;