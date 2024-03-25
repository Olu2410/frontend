import  './NewCollections.css'
import new_collections from '../assets/new_collections'
import Item from '../items/Item'

const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>New Collections</h1>
        <hr />
        <div className="collections">
            {new_collections.map((item)=>{
                return <Item key= {item.id} {...item} />
            })}
        </div>

    </div>
  )
}

export default NewCollections
