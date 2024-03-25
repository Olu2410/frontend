import './Popular.css'
import data_product from '../assets/data'
import Item from '../items/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {data_product.map((item)=> {
                return <Item key= {item.id} {...item} />
            })}
        </div>
      
    </div>
  )
}

export default Popular
