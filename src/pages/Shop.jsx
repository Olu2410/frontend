import Hero from "../components/Hero/Hero"
import NewCollections from "../components/NewCollections/NewCollections"
import NewsLetter from "../components/NewsLetter/NewsLetter"
import Offers from "../components/Offers/Offers"
import Popular from "../components/popular/Popular"


const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter /> 
    </div>
  )
}

export default Shop
