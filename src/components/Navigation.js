import React from "react";
import { Link } from "react-router-dom";
export const Navigation = ({children}) => {
    return (
        <>
        <div style={{width: '100vw', margin: '50px'}}>
            <Link to='/' style={{margin: '0 40px'}}>Home</Link>
            <Link to='/about'>About</Link>
        </div>
        {children}
        </>
    )
}