import React from 'react'
import { Modal } from '../../../../components/Modal/Modal'
import { RegsitrationStepCounter } from '../RegisterStepCounter/RegsitrationStepCounter';

import './RegisterModal.css';

export const RegisterModal:React.FC = () => {
  return (
    <Modal>
      <div className="register-modal">
         <RegsitrationStepCounter step={1}/>
      </div>
    </Modal>
  )
}
