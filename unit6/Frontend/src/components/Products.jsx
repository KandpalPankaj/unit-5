
import {useState , useEffect} from 'react'
import axios from 'axios'
import  {useSearchParams} from 'react-router-dom'
import "./Product.css"

export const Products = () => {
  const [prod , setProd] = useState([])
  const [params , setParams] = useSearchParams()
  // const [page , setPage] = useState(1)
  const [sort , setSort] = useState("1")
  const [color , setColor] = useState([])
  const [brandName ,setBrand] = useState([])
  // const [total , setTotal] = useState()
  const[categoryId , setCatId] = useState([])

    
  const getData = () => {
        axios({
            url:"http://localhost:5000/products",
            method :'GET',
            headers: {
              'Content-Type': 'application/json',
                  },
            params: {
              
                sort,
                brandName,
                color,
                categoryId
            }
        }).then(({data}) => {
              console.log(data.product)
            setProd(data.product)
            // setTotal(data.totalPages)
        }
        )
    }
    useEffect(()=> {
        getData()
        
    },[sort ,brandName,color,categoryId])
    
   
    useEffect(()=> {
       setParams({
            
            sort,
            brandName,
            color,
            categoryId
        })
    },[sort ,brandName,color,categoryId, setParams ])

    return (
      <div>
          <h1 style = {{textAlign:"center"}}>Categories</h1>
         <div style={{display:"flex" , marginLeft:"40%"}}>
         <img style={{height:"100px",width:"100px",marginRight:"20px"}} src="https://content.shop4reebok.com/static/Product-HG5456/reebok_HG5456_1.jpg.plp" alt="" />
         <img style={{height:"100px",width:"100px"}} src="https://m.media-amazon.com/images/I/61Ov56SdKVS._AC_UL320_.jpg" />
          </div>
          
<div className='dropdown'>    
<ul className="main-navigation">
  
  <li><a href="#">Men</a>
    <ul>
      <li><a href="#">Clothes</a>
        <ul>
          <li><a onClick={()=>setCatId("62a338a617d183dfe65a7c4b")}>Pants</a></li>
        </ul>
      </li>
      <li><a href="#">Footwear</a>
        <ul>
          <li><a onClick={()=>setCatId("62a33d3317d183dfe65a7c6b")}>Shoes</a></li>
          <li><a onClick={()=>setCatId("62a3418f17d183dfe65a7c87")}>Slippers</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li><a>Women</a>
    <ul>
      <li><a>Clothes</a>
        <ul>
          <li><a onClick={()=>setCatId("62a3442b17d183dfe65a7c9b")}>Sarees</a></li>
        </ul>
      </li>
      <li><a href="#">Accessories</a>
        <ul>
          <li><a onClick={()=>setCatId("62a34b9417d183dfe65a7cbd")}>Handbags</a></li>
        </ul>
      </li>
      </ul>
      </li>
  </ul>
  </div>    
            
            <select name="" id="" onChange={(e)=>setSort(e.target.value)}>
                <option value="1">Asc </option>
                <option  value="-1">Des</option>
            </select>
            
            
            <select name="" id="" onChange={(e) => setBrand(e.target.value)}>
                <option value="">Filter By Brand</option>
                <option value="reebok">Reebok</option>
                <option value="nike">Nike</option>
                <option value="Generic">Generic</option>
                <option value="pepe Jeans">Pepe Jeans</option>
                <option value="GoSriKi">GoSriKi</option>
                <option value="Mammon">Mammon</option>
            </select>

            <select name="" id="" onChange={(e) => setColor(e.target.value)}>
                <option value="">Filter By Color</option>
                <option value="black">Black</option>
                <option value="grey">Grey</option>
                <option value="brown">Brown</option>
                <option value="pink">Pink</option>
                <option value="purple">Purple</option>
            </select>
{/* 
        <button disabled={page==1} onClick={()=>setPage(page-1)}>Prev</button>
        <button  disabled={page==total}onClick={()=>setPage(page+1)}>Next</button> */}
           <div className='cards'>
            {prod.map((e)=>{
   
                 console.log(e.categoryId.categoryname)
           return(
               <div className="cards-1">
               <div className='cards-img'>
                <img src={e.imgUrl} alt="" />
               <div className='cards-p'>

               <h2>{e.name}</h2>
               <p>Color : {e.color}</p>
               <p>Rs.{e.price}</p>
               <p>Brand : {e.brandName}</p>
                <p>categoryId : {e.categoryId.categoryname}</p>
               </div>
           </div>
          </div>
            )
           })
        }
        </div>
        </div>
    )
}