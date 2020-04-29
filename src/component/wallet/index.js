import React,{useState} from 'react'
import Swal from 'sweetalert2'
export const Wallet = () => {
  const [document, setDocument] = useState('')
  const [total, setTotal] = useState('')
  const [email, setEmail] = useState('')

  const onChangeTotal =(e)=>setTotal( e.target.value)
  const onChangeDoc =(e)=>setDocument( e.target.value)
  const onChangeEmail =(e)=>setEmail( e.target.value)

  const onClick = (e)=>{
    e.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"total":total});

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://localhost/project/public/index.php/wallet/${document}/${email}/edit`, requestOptions)
      .then(response => response.json())
      .then(result => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        setTotal('')
        setDocument('')
        setEmail('')
        
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

    <div className="container">
      <div className="row">
      <form>
        <div className="form-group">
          <label>Documento</label>
          <input className="form-control" type="text" onChange={onChangeDoc} value={document} />
        </div>
        <div className="form-group">
          <label>Correo</label>
          <input className="form-control" type="text" onChange={onChangeEmail} value={email} />
        </div>
        <div className="form-group">
          <label>Total</label>
          <input className="form-control" type="text" onChange={onChangeTotal} value={total} />
        </div>
        {(document && email && total) ?
          <button className="btn btn-primary" onClick={onClick}>Update</button>
          : ''

        }
      </form>
      </div>
    </div>
  )
}
