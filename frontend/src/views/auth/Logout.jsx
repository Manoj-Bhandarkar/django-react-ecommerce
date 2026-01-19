import { useEffect, useState } from 'react';
import { logout } from '../../utils/auth';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';

function Logout() {
    useEffect(() => {
        logout();
        
    }, []);

    return (
        <div>
            <h1>logout</h1>
            <Link to='/register'>Register</Link><br />
            <Link to='/login'>Login</Link>
        </div>
    )
}

export default Logout