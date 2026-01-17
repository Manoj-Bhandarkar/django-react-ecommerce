import { useEffect, useState } from 'react';
import { setUser } from '../utils/auth';

const MainWrapper = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handler = async () => {
            try {
                await setUser(); // sets user in store (JWT → user)
            } catch (error) {
                console.error("Auth init failed:", error);
            } finally {
                setLoading(false);
            }
        };
        handler();
    }, []);

    return <>{loading ? null : children}</>;
};

export default MainWrapper;
