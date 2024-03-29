import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import "../styles/Breadcrumb.scss"
// import { ReactComponent as Circle} from '../assets/images/Menu/start.svg';
// import { ReactComponent as Line} from '../assets/images/Menu/line.svg';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb() {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick} style={{ '&:hover': { color: '#a63d40' } }} >
            Головна
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/#"
            onClick={handleClick}
            style={{ '&:hover': { color: '#a63d40' } }} 
        >
            Меню
        </Link>,
        <Typography key="3" color="text.primary">
            Рекомендуємо
        </Typography>,
    ];

    return (
        <>  
        <div className="bread-crumb">
            <Stack spacing={2}>
                <Breadcrumbs separator="-" aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>
        </div>
        <div className='divider'>
                <div className="divider__circle"></div>
                <div className="divider__line"></div>
                <div className="divider__circle"></div>
        </div>
        </>
    );
}
