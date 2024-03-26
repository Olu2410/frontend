import { useContext } from 'react'
import './CSS/ShopCategory.css'
import ShopContext from '../context/ShopContext'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/items/Item'
import all_products from '../components/assets/all_product'


const ShopCategory = (props) => {

  const all_product = useContext(ShopContext)
  return (
    <div className="shop-category">
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcat-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item) =>{
          if(props.category===item.category){
          
            return <Item key= {item.id} {...item} />
          }
          else{
            return null;
          } 

        })}
      </div>
      
    </div>
  )
}

export default ShopCategory
