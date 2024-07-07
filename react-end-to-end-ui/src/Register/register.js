"use client"
import { useState } from 'react'
import configuration from './config'
import Input from '@/TagControls/input'
import React from 'react'
import Link from 'next/link'
import { hadleFormSubmit } from '../Validations/appValidations'
import { hanldeFieldValidation } from '../Validations/appValidations'
export const Register = () => {
  const [inputControls, setInputControls] = useState(configuration);
  const handleOnClick = (event) => {
    setInputControls(hanldeFieldValidation(event, inputControls))
  }
  const hadleFormSubmitClick = () => {
    const [isValid, inputControlsObj, modelData] = hadleFormSubmit(inputControls);
    if (!isValid) {
      setInputControls(inputControlsObj);
      return;
    }
    console.log(modelData);
  }
  return <div className='container-fluid'>
    <div>
      <h2 className='text-center'>Register</h2>
    </div>
    {inputControls.map((control) => {
      return <div className='row mb-3' >
        <div className='col-md-5 text-end' >
          <b id={control.model}>{control.lbl}</b>
        </div>
        <div className='col-md-3'>
          <Input {...control} handleOnClick={handleOnClick} />
        </div>
        <div className='col-md-4 text-danger' >
          <b>{control.errorMessage}</b>
        </div>
      </div>
    })
    }
    <div className='row'>
      <div className='offset-sm-5 col-sm-7 '>
        <button type='submit' className='btn btn-primary' onClick={hadleFormSubmitClick}>register</button>
        <Link href="/login" className='ms-3'>To login</Link>
      </div>
    </div>
  </div>
}