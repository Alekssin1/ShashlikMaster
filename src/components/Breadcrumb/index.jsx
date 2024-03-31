import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import "components/Breadcrumb/index.scss"
import "styles/Colors.scss"


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
                <Breadcrumbs separator="-" aria-label="breadcrumb" 
                sx={{
                    ".css-bvyohc-MuiTypography-root-MuiLink-root": {
                        color: "#fff !important",
                        opacity: "0.8",
                        fontSize: "0.75rem!important",
                        letterSpacing: "0.1em!important",
                        fontWeight: "500!important",
                    },
                    
                    ".css-bvyohc-MuiTypography-root-MuiLink-root:hover": {
                        color: "#a63d40!important",
                        textDecoration: "underline",
                    },
                    
                    ".css-1wuw8dw-MuiBreadcrumbs-separator": {
                        color: "#fff !important",
                        opacity: "0.6",
                    },
                    
                    ".css-4pdmu4-MuiBreadcrumbs-ol": {
                        marginLeft: "7rem!important",
                        marginTop: "0.9375rem!important",
                        marginBottom: "0.6875rem!important",
                        backgroundColor: "rgba(#121212, 0.4)!important",
                        "@media screen and (max-width: 1200px)": {
                            marginLeft: "4.5rem!important",
                        },
                        "@media screen and (max-width: 768px)": {
                            marginLeft: "2rem!important",
                        },
                        "@media screen and (max-width: 540px)": {
                            marginLeft: "1.25rem!important",
                            marginTop: "0.625rem!important",
                            marginBottom: "0.375rem!important",
                        },
                        
                    },
                    
                    ".css-1gqyz35-MuiTypography-root": {
                        justifyContent: "bottom!important",
                        color: "#a63d40!important",
                        fontFamily: "'Inter'!important",
                        fontSize: "0.75rem!important",
                        letterSpacing: "0.1em!important",
                        fontWeight: "500!important",
                        lineHeight: "1!important",
                        textDecoration: "underline",
                    },
                }   
                    
                }>
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
