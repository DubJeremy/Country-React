import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink exact to="/" ClassName="active">
                Accueil
            </NavLink>
            <NavLink exact to="/a-propos" ClassName="active">
                A propos
            </NavLink>
        </div>
    );
};

export default Navigation;