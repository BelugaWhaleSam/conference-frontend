import React from 'react'

import { RegisterModal } from '../features/register/components/RegisterModal/RegisterModal';

import './Home.css';
import '../global.css';

export const Home:React.FC = () => {
  return (
    <div className='home-container bg-color'>
      <RegisterModal/>
    </div>
  )
}

