import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';

const Canceled = () => {
    return (
        <div className='success-wrapper'>
            <div className='success'>
                <p className='icon'>
                    <BsBagCheckFill />
                </p>
                <h2>Something Went Wrong :&#40 Please Try Again</h2>
                <Link href='/'>
                    <button type='button' width='300px' className='btn'>
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Canceled