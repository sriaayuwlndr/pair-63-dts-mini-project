import React from 'react';
import { Box } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';

const HomePage = () => {

    const [user] = useAuthState(auth);

    return (
        <Box>
            <p>HAY</p>
            <p>Welcome {user?.email}</p>
        </Box>
    );
}

export default HomePage;