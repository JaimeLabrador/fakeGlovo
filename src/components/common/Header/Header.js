import React, { useState } from 'react';
import './header.css';
import firebase from '../../../config/firebase';

const Header = () => {
    const [user, setUser] = useState(null);
    
    const logOut = () => {
        firebase.auth().signOut().then( () => {
            setUser(null);
            console.log(user)
        })
    }

    return (
        <header>
            <div className="headerItems">
                <span className="far fa-user-circle"></span>
                <p className="headerItems__direction" >Dirección del usuario <span className="fas fa-chevron-down"></span></p>
                <button onSubmit={logOut} type='submit'><span className="fas fa-sign-out-alt"></span></button>
            </div>
        </header>
    )
}

export default Header
