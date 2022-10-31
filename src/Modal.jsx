import React from 'react'


const Modal = ({ open, onClose }) => {
    if (!open) return null



    return (

        <div onClick={onClose} className='overlay'>
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className='modalContainer'
            >
                <div className='modal'>
                    <p onClick={onClose} className='closeBtn'><ion-icon name="close-circle-outline"></ion-icon></p>
                    <div className='content'>
                        <button className='myacount'> Meus pedidos</button>
                        <button className='myacount'> Minha conta </button>
                        <button className='simple'> Criar um cadastro </button>
                        <button className='simple'> Voltar a página </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal