import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdownIcon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const { allProducts } = useContext(ShopContext);


  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src={props.banner} alt="" />
      <div className="shop-category-index-sort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shop-category-sort'>
          Sort by <img src={dropdownIcon} alt="" />
        </div>
      </div>
      <div className="shop-category-products">
        {
          allProducts.map((item, i) => props?.category === item?.category && <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />)
        }
      </div>
      <div className="shop-category-load-more">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory