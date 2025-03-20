import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

// category is from assets.js file where we can see categories of fodd such as salad,sandwich,rolls etc
const FoodDisplay = ({category}) => {
// getting the data from context API(StoreContext compo)
    const {food_list} = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className='food-display-list'>
           {
            food_list.map((item,index)=>{
                {console.log(category,item.category)}
                if(category==="All" || category===item.category){
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                }     
            })
           }
        </div>
    </div>
  )
}

export default FoodDisplay