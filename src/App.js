import React, { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setOpenModal(true)} className='modalButton'></button>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default App;
