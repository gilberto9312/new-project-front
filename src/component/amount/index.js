import React,{useState} from 'react'
import Swal from 'sweetalert2'

export const Amount = () => {
  const [document, setDocument] = useState('')
  const [phone, setPhone] = useState('')
  const [amount, setAmount] = useState('')

  const onChangeDoc =(e)=>setDocument( e.target.value)
  const onChangePhone =(e)=>setPhone( e.target.value)

  const onSubmit =(e)=>{
    e.preventDefault()

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"document":document,"phone":phone});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost/project/public/index.php/clients/view", requestOptions)
      .then(response => response.json())
      .then(result => setAmount(result))
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
        <div className = "form-group ">
        <label>Phone
          <input className="form-control" type ="text" onChange={onChangePhone} value={phone}/>
        </label>
        </div>
        {(document && phone)?
          <button className="btn btn-primary" onClick={onSubmit} >Save</button>
          : ''

        }
      </form>

      <div> <label>Saldo :</label>{amount}</div>
      </div>
    </div>
  )
}
