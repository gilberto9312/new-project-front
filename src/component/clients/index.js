import React,{useState} from 'react'
import Swal from 'sweetalert2'
export const Clients = () => {
  const [document, setDocument] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const onChangeDoc =(e)=>setDocument( e.target.value)
  const onChangeName =(e)=>setName( e.target.value)
  const onChangeEmail =(e)=>setEmail( e.target.value)
  const onChangePhone =(e)=>setPhone( e.target.value)

  const onSubmit =(e)=>{
    e.preventDefault()
    

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({"document":document,"name":name,"email":email,"phone":phone});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost/project/public/index.php/clients/new", requestOptions)
      .then(response => response.json())
      .then(result => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        setDocument('')
        setName('')
        setEmail('')
        setPhone('')
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      });
  } 

  return (
    <div className ="container">
      <div className="row">
      <form>
        <div className="form-group">
        <label>Document
          <input className="form-control" type ="text" onChange={onChangeDoc} value={document}/>
        </label>
        </div>
        <div className="form-group">
        <label>Name
          <input className="form-control" type ="text" onChange={onChangeName} value={name} />
        </label>
        </div>
        <div className="form-group">
        <label>Email
          <input className="form-control" type ="email" onChange={onChangeEmail} value={email} />
        </label>
        </div>
        <div className = "form-group ">
        <label>Phone
          <input className="form-control" type ="text" onChange={onChangePhone} value={phone}/>
        </label>
        </div>
        {(document && name && email && phone)?
          <button className="btn btn-primary" onClick={onSubmit} >Save</button>
          : ''

        }
      </form>
      </div>
    </div>
  )
}
