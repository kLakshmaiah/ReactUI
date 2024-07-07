"use client"
import TextAreaComponent from "./textAreaControl"
import SelectComponent from "./Select"
const { Fragment } = require("react")
const inputComponent = (control) => {
    const {type, model, options, values, handleOnClick }=control;
    switch (type) {
        case 'text':
        case 'date':
        case 'password':
            return <Fragment>
                <input type={type} id={model} key={model} onChange={handleOnClick} className='form-control' />
            </Fragment>
        case 'radio':
            return <Fragment>
                {options.map((option, index) => {
                    return <><input type={type} id={model} value={values[index]} className="ms-3" onChange={handleOnClick} key={"gender" + values[index]} /><b>{option}</b></>
                })}
            </Fragment>
        case 'checkbox':
            return <Fragment>
                {options.map((option, index) => {
                    return <><input type={type} id={model} value={values[index]} className="ms-3" onChange={handleOnClick} key={"hobbies" + values[index]} /><b>{option}</b></>
                })}
            </Fragment>
            case 'select':
                return <SelectComponent {...control}></SelectComponent>
        default:
            return <TextAreaComponent {...control} />
    }
}
export default inputComponent;