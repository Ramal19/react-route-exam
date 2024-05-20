import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Catalogs.scss'

function Catalogs() {

    
  const [data, setData] = useState([])

  useEffect(() => {
    
    fetch("http://localhost:8000/catalogs")
    .then(res=>res.json())
    .then(data=>setData(data))
  }, [data])

  const deleteBtn = function(id){

    axios.delete(`http://localhost:8000/catalogs/${id}`)
    .then(data=>setData(data))
    // console.log(id);
  }


  return (
    <div className='total'>
    {
      data.map(item=>{
        return(
            <div className='catalogs' key={item.id}>
              <img src={item.file} alt="" />
              <h1>{item.name}</h1>
              <p>{item.info}</p>
              <span>{item.price}</span>
              <div className='btn'>
                <button onClick={()=>deleteBtn(item.id)}>Delete</button>
                <Link to={`details/${item.id}`}><button>Details</button></Link>
              </div>
            </div>
        )
      })
    }
    </div>
  )
}

export default Catalogs