import  './NewCollections.css'
import new_collection from '../assets/new_collections'
import Item from '../items/Item'

const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>New Collections</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item)=>{
                return <Item key= {item.id} {...item} />
            })}
        </div>

    </div>
  )
}

export default NewCollections
