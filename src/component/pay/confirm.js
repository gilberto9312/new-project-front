import React, { useState } from 'react'

export const Confirm = () => {
  const [token, setToken] = useState('')

  const onChangeToken =(e)=>setToken( e.target.value)

  const onClick = ()=>{
    var myHeaders = new Headers();

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`http://localhost/project/public/index.php/wallet/${token}/sub`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  return (
    <div>
      <label>total</label>
      <input type="text" onChange={onChangeToken} />
      <button onClick={onClick}>Confirm</button>
    </div>
  )
}
