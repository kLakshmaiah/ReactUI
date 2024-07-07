"use client"
const { Fragment } = require("react")
const TextAreaComponent = ({ model, handleOnClick }) => {
            return <Fragment>
                     <textarea className="form-control" id={model}  onChange={handleOnClick}/>
            </Fragment>
}
export default TextAreaComponent;