import React from 'react'
import './NewsLater.css'

const NewsLater = () => {
    return (
        <div className='newslater'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newslater and stay connected</p>
            <div>
                <input type="email" placeholder='Your Email' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLater
