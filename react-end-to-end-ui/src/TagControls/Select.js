"use client"
const { Fragment } = require("react")
const SelectComponent = ({ model, options, values, handleOnClick }) => {
    return <Fragment>
        <select id={model} onChange={handleOnClick} className="form-control">
            <option>----please select -----</option>
            {options.map((option,index) => {
              return <option value={values[index]}>{option}</option>
            })}
        </select>
    </Fragment>
}
export default SelectComponent;