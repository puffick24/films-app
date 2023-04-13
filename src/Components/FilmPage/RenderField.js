import { useState } from 'react';
import style from './FilmPage.module.css'
import PropTypes from 'prop-types'

import { Formik } from 'formik';
import * as yup from 'yup';

const RenderField = ({ label, value, isEditing, onFieldChange}) => {
    const [inputValue, setInputValue] = useState(value);

    const validationSchema = yup.object().shape({
        value: yup.string().required('This field is required.'),
      });

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
                    <Formik
                        initialValues={{ value: value }}
                        validationSchema={validationSchema}
                        onSubmit={() => {}}
                    >
                    {({ errors, touched, handleChange, handleBlur }) => (
                        <div className={style.input_block}>
                            <input
                                name="value"
                                value={inputValue}
                                onChange={(event) => {
                                    handleChange(event)
                                    handleInputChange(event)  
                                }}
                                onBlur={handleBlur}
                            />
                            {errors.value && touched.value && (<div className={style.valid_message}>{errors.value}</div>)}
                        </div>
                    )}
                    </Formik>
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