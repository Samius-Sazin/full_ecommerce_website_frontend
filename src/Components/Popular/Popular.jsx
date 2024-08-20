import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Item/Item';

const Popular = () => {
    const [popular_in_women_products, setPopular_in_women_products] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/popularinwomen')
            .then(resp => resp.json())
            .then(data => setPopular_in_women_products(data));
    }, [])

    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {
                    popular_in_women_products.map((item, i) => <Item
                        key={i}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />)
                }
            </div>
        </div>
    )
}

export default Popular
