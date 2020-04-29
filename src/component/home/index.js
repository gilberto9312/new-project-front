import React,{useEffect, useState} from 'react'
import Swal from 'sweetalert2'

export const Home = () => {
  const [clients, setClients] = useState([])

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost/project/public/index.php/clients", requestOptions)
      .then(response => response.json())
      .then(result => setClients(result))
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      });
      // eslint-disable-next-line
  }, [])
  return (
    <div className="container">
      <div className="row">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Documento</th>
            <th scope="col">Nombre</th>
            <th scope="col">Telefono</th>
          </tr>
        </thead>
        <tbody>
          
          {clients.map(i=><tr key ={i.id}><td>{i.id}</td><td>{i.document}</td><td>{i.name}</td><td>{i.phone}</td></tr>)}
          
        </tbody>
      </table>
      </div>
    </div>
  )
}
