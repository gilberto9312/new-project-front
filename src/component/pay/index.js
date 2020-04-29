import React,{useState} from 'react'
import { GetClients } from '../clients/get_clients'
import Swal from 'sweetalert2'

export const Token = () => {
  const [total, setTotal] = useState('')
  const [client, setClient] = useState('')
  const [token, setToken] = useState('')
  const [confirm, setConfirm] = useState(false)

  const onChangeTotal =(e)=>setTotal( e.target.value)
  const onChangeClient =(e)=>setClient( e.target.value)
  const onChangeToken =(e)=>setToken( e.target.value)

  const onClick = (e)=>{
    e.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"monto":total,"client":client});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost/project/public/index.php/confirm/new", requestOptions)
      .then(response => response.json())
      .then(result => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        setConfirm(true)
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      });
  }

  const pay = (e)=>{
    e.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "sf_redirect=%7B%22token%22%3A%22d99c7c%22%2C%22route%22%3A%22confirm_new%22%2C%22method%22%3A%22POST%22%2C%22controller%22%3A%7B%22class%22%3A%22App%5C%5CController%5C%5CConfirmController%22%2C%22method%22%3A%22new%22%2C%22file%22%3A%22%5C%2Fvar%5C%2Fwww%5C%2Fhtml%5C%2Fproject%5C%2Fsrc%5C%2FController%5C%2FConfirmController.php%22%2C%22line%22%3A41%7D%2C%22status_code%22%3A201%2C%22status_text%22%3A%22Created%22%7D");

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`http://localhost/project/public/index.php/wallet/${token}/sub`, requestOptions)
      .then(response => response.json())
      .then(result => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        setConfirm(false)
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      });
      }

  if(confirm){
    return (
      <div className ="container">
        <div className = "row">
          <form>        
            <div class="form-group">
              <label>Token</label>
              <input className="form-control" type="text" onChange={onChangeToken} />
            </div>
            <button className="btn btn-primary" onClick={pay}>Pay</button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className ="container">
      <div className = "row">
      <form>        
        <label >Cliente</label>
        <GetClients onChange={onChangeClient} />
        <div class="form-group">
          <label>Total</label>
          <input className="form-control" type="text" onChange={onChangeTotal} />
        </div>
        <button className="btn btn-primary" onClick={onClick}>Update</button>
      </form>
      </div>
    </div>
  )
}
