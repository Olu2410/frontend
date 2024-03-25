import './Item.css'

// eslint-disable-next-line react/prop-types
const Item = ({image, name, new_price, old_price}) => {
  console.log(name)
  return (
    <div className='item'>
        <img src={image} alt="" />
        <p>{name}</p>
        <div className="items-prices">
            <div className="item-price-new">
                ${new_price}
            </div>

            <div className="item-price-old">
            ${old_price}
            </div>
        </div>
      
    </div>
  )
}

export default Item
