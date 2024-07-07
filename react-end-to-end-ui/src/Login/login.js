"use client"
import { useState } from 'react'
import configuration from './config'
import Input from '@/TagControls/input'
import React from 'react'
import { hanldeFieldValidation,hadleFormSubmit } from '@/Validations/appValidations'
import Link from 'next/link'
const login=()=>{
      const [inputControls,setInputControls]=useState(configuration);
      const handleOnClick=(event)=>{
        setInputControls(hanldeFieldValidation(event,inputControls))
      }
      const hadleFormSubmitClick=()=>{
        const [isValid,inputControlsObj,{emid,pwd}]=hadleFormSubmit(inputControls);
        if(!isValid){
          setInputControls(inputControlsObj);
          return;
        }
        alert("email-id is"+emid+" "+"password is "+pwd);
      }
    return <div className='container-fluid'>
             <h2 className='text-center'>Login</h2>  
              {inputControls.map((control)=>{
                  return <div className='row mb-3' >
                    <div className='col-md-5 text-end' > 
                    <b id={control.model}>{control.lbl}</b>
                    </div>
                    <div className='col-md-3'>
                        <Input type={control.type} model={control.model} handleOnClick={handleOnClick}/>
                    </div>
                    <div className='col-md-4 text-danger' >
                        <b>{control.errorMessage}</b>
                    </div>
                  </div>   
               })  
              }
            <div className='row'>
              <div className='offset-sm-5 col-sm-7 '>
              <button type='submit' className='btn btn-primary' onClick={hadleFormSubmitClick}>submit</button>
              <Link href="/register" className='ms-3'>register</Link>
              </div>
            </div>
    </div>
}
export default  login;