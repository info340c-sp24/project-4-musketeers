import React from 'react'
import { auth } from '../firebase';

const Home2 = () => {
    const { currentUser } = auth // remove () for if there is error
    return (
        <div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div>
    )
}

export default Home2