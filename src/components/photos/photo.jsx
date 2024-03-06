import React from 'react'
import { Button } from 'react-bootstrap'

export default function Photo() {
    return (
        <>
            <PhotoUploaded />
            {/* <PhotoEmpty /> */}


        </>
    )
}


function PhotoUploaded() {
    return (
        <div className='position-relative'
            style={
                {
                    backgroundColor: 'var(--bs-light)',
                    height: '150px',
                    width: '100%',
                    overflow: 'hidden',
                    borderRadius: 'var(--bs-border-radius)',
                }
            }
        >

            <img src="https://via.placeholder.com/300/EEE/000" alt="uploaded" className='img-fluid w-100 h-100'

                style={
                    {
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }
                }
            />
            <div className='position-absolute'
                style={
                    {
                        bottom: '.6rem',
                        right: '.6rem',
                        background: 'lightgray',
                        borderRadius: '4rem',
                        height: '30px',
                        width: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.3rem',
                        cursor: 'pointer',

                    }
                }
            >
                🧹
            </div>
        </div>
    )
}

function PhotoEmpty() {
    return (
        <div className='d-flex justify-content-center align-items-center rounded border' style={
            {
                height: '150px',


            }
        }>
            <Button variant='outline-dark' className='d-flex justify-content-center align-items-center'

            >
                +

            </Button>
        </div>
    )
}   