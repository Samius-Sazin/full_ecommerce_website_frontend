import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Item/Item'

const NewCollections = () => {
    const [newCollections, setNewCollections] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/newcollections')
            .then(resp => resp.json())
            .then(data => setNewCollections(data));
    }, [])

    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {
                    newCollections.map((item, i) => <Item
                        key={i}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />)
                }
            </div>
        </div>
    )
}


export default NewCollections
