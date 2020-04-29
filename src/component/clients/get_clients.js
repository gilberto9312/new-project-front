import React,{useState,useEffect} from 'react'

export const GetClients = (props) => {
  const [clients, setClients] = useState([1,2,3])

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
    };
    
    fetch("http://localhost/project/public/index.php/clients", requestOptions)
      .then(response => response.json())
      .then(result => {
        setClients(result)
        console.log(result)})
      .catch(error => console.log('error', error));
      // eslint-disable-next-line
  }, [])
  return (
    <div className="form-group">
      <select className="form-control" onChange={props.onChange}>
          <option>select</option>
          {
            clients.map(i=><option key={i.id} value = {i.id}>{i.name}</option>)
          }
          
      </select>
    </div>
  )
}
