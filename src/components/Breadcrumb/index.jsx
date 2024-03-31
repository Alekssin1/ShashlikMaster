import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import "components/Breadcrumb/index.scss"


function handleClick(event) {
    event.preventDefault();
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
