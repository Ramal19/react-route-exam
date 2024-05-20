import { useForm } from "react-hook-form"
import './Add.scss'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"


export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const [image, setImage] = useState(null);
  
  const convertToBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        setImage(reader.result);
    }
  } 

const navigate = useNavigate()  

const onSubmit = (data) => {
    
  axios.post('http://localhost:8000/catalogs', data)
}

  return (
    <div className="form">

      {image && <img src={image} />}

      <form id="myF" onSubmit={handleSubmit(onSubmit)}>

        <input type="file" {...register('file', { required: true })} onInput={(e) => convertToBase64(e.target.files[0])} />

        <input {...register("name")} />

        <input  {...register("info")}/>

        <input {...register("price", { required: true })} />
        {errors.price && <span>This field is required</span>}


        <input type="submit" />
      <button onClick={()=>navigate(-1)}>Geri</button>

      </form>
    </div>
  )
}