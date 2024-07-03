import configuration from './config'
const login=()=>{
    return <div className='container-fluid'>
             <h2 className='text-center'>Login</h2>  
              {configuration?.map((control)=>{
                  return <div className='row text-end mb-3'>
                    <div className='col-md-5'>
                        <b>{control.lbl}</b>
                    </div>
                    <div className='col-md-3'>
                        <input type={control.type} className='form-control' id={control.model} />
                    </div>
                    <div className='col-md-4'>
                        <b>{control.errorMessage}</b>
                    </div>
                  </div>   
               })  
              }
            <div className='row'>
              <div className='offset-sm-5 col-sm-7 '>
              <button type='submit' className='btn btn-primary'>submit</button>
              </div>
            </div>
    </div>
}
export default  login;