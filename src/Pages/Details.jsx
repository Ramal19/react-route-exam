import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    
    const {id} = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        
        axios.get(`http://localhost:8000/catalogs/${id}`)
        .then(res=>setData(data))
    }, [data])
    

  return (
    <div>
      {data.name}
    </div>
  )
}

export default Details