import { useEffect, useState } from 'react';
import { register } from '../../utils/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';

function Register() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn()) {
            navigate('/');
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Set isLoading to true when the form is submitted
        setIsLoading(true);

        const { error } = await register(fullname, email, phone, password, password2);
        if (error) {
            alert(JSON.stringify(error));
        } else {
            navigate('/');
            resetForm();
        }
    }
    return (
        <>
            <div>Register</div>
            <br />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="username"
                    placeholder="Full Name"
                    required
                    onChange={(e) => setFullname(e.target.value)}
                />
                <br />
                <br />
                <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <input
                    type="text"
                    id="phone"
                    placeholder="Mobile Number"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                />
                <br />
                <br />
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                <br />
                <input
                    type="password"
                    id="confirm-password"
                    placeholder="Confirm Password"
                    required
                    onChange={(e) => setPassword2(e.target.value)}
                />
                <br />
                <br />
                <button type='submit'>Register</button>
            </form>
        </>
    )
}

export default Register;