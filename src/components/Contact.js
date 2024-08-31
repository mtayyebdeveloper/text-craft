import React from 'react'

function Contact(props) {
  return (
   <>
   <div className="container">
   <form className="row g-3 needs-validation" novalidate>
  <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label" style={{color:props.lightmood ==='light'?'black':'white'}}>First name</label>
    <input type="text" className="form-control" id="validationCustom01" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label" style={{color:props.lightmood ==='light'?'black':'white'}}>Last name</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustomUsername" className="form-label" style={{color:props.lightmood ==='light'?'black':'white'}}>Email id</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="email" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom03" className="form-label" style={{color:props.lightmood ==='light'?'black':'white'}}>City</label>
    <input type="text" className="form-control" id="validationCustom03" required/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom04" className="form-label" style={{color:props.lightmood ==='light'?'black':'white'}}>State</label>
    <select className="form-select" id="validationCustom04" required>
      <option selected disabled>Pakistan</option>
      <option>India</option>
      <option>China</option>
      <option>USA</option>
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom05" className="form-label" style={{color:props.lightmood ==='light'?'black':'white'}}>Zip</label>
    <input type="text" className="form-control" id="validationCustom05" required/>
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" htmlFor="invalidCheck" style={{color:props.lightmood ==='light'?'black':'white'}}>
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
</form>
   </div>
   </>
  )
}

export default Contact
