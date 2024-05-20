import './Home.scss';
import { IoPersonSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { FaCarSide } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function App() {

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


  // console.log(deleteBtn);
  

  return (
    <>
    <nav>
      <div className="top"><div className="searchInp">
            <IoSearchOutline/>
            <input type="search"/>
        </div>
        <h1>shoppers</h1>
        <ul>
          <li><IoPersonSharp /></li>
          <li><FaHeart/></li>
          <li><FaCartShopping/></li>
          <li><PiNumberCircleTwoFill/></li>
        </ul>
      </div>
      <div className="bottom">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <Link style={{textDecoration: 'none', color: '#000'}} to='/catalogs'><li>catalogue</li></Link>
          <Link style={{textDecoration: 'none', color: '#000'}} to='/add'><li>add</li></Link>
          <li>contact</li>
        </ul>
      </div>
    </nav> 

    {/* HEADER */}

    <header>
      <img src="https://png.pngtree.com/png-vector/20220715/ourmid/pngtree-cool-and-creative-blue-shoes-illustration-png-image_5951209.png"/>
      <div className="text">
        <h1>Finding Your Perfect Shoes</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
        <button>shop now</button>
      </div>
    </header>

    {/* SECTION-ONE */}

    <section className="sectionOne">
      <div className="icons">
        <div className="icon">
          <FaCarSide className='i'/>
          <div className="text">
            <h2>FREE SHIPPING</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
          </div>
        </div>
        <div className="icon">
          <FaCarSide className='i'/>
          <div className="text">
            <h2>FREE SHIPPING</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
          </div>
        </div>
        <div className="icon">
          <FaCarSide className='i'/>
          <div className="text">
            <h2>FREE SHIPPING</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
          </div>
        </div>
      </div>
    </section>

    {/* SECTION-TWO */}

    <section className="sectionTwo">
      <div>
          <h1>Men</h1>
          <p>Collections</p>
      </div>
      <div>
          <h1>Men</h1>
          <p>Collections</p>
      </div>
      <div>
          <h1>Men</h1>
          <p>Collections</p>
      </div>
    </section>

    {/* SECTION-THREE */}

    <section className='sectionThree'>
      <div className="top">
        <div className='line'></div>
        <h1>Featured Products</h1>
      </div>
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
    </section>

    {/* SECTION-FOUR */}

    <section className="sectionFour">
      <div className='line'></div>
      <h1>Big Sale!</h1>
      <div className="bottom">
        <img src="https://preview.colorlib.com/theme/shoppers/images/blog_1.jpg"/>
        <div className="text">
          <h1>50% less in all items</h1>
          <div className="alt">
            <p>By <span>Carl Smith</span> • September 3, 2018</p>
          </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
        <button>SHOP NOW</button>
        </div>
      </div>
    </section>

    {/* FOOTER */}

    <footer>
      
    </footer>
    </>
  )
}

export default App