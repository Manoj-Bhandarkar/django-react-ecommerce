import React from 'react'

import { useAuthStore } from '../../store/auth';
import { Link } from 'react-router-dom';

function Dashboard() {

    const [isLoggedIn, user] = useAuthStore((state) => [
        state.isLoggedIn,
        state.user,
    ]);


    return (
        <div>
            {isLoggedIn()
                ?
                <div>
                    <h1>Dashboard</h1>
                    <Link to={"/logout"}>Logout</Link>
                </div>
                :
                <div>
                    <h1>Homepage</h1>
                    <Link to='/register'>Register</Link><br />
                    <Link to='/login'>Login</Link>
                </div>}
        </div>
    );
}

export default Dashboard