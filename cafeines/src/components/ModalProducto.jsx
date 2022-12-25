import React, { useEffect } from 'react';
import Modal from 'react-modal';


const ModalProducto = ({mostrarModal, data, ocultarModal}) => {
    
  Modal.setAppElement('#root');
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  useEffect(() =>{
    if(mostrarModal){
        setIsOpen(true)
    }else{
        setIsOpen(false)
    }

  },[mostrarModal])

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
    ocultarModal(false);
  }

  const customStyles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.75)"
    },

    content: {
    
      top: '40%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: '0',
      width: '90%',
      height: 'auto',  
      padding: '0'
    },
  };

  return (
    <div className='w-full'>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
            <div className="w-full h-full flex flex-col justify-center items-center shadow-md">
                <div className="w-full flex justify-center">
                    <img src={data.url} className="w-full" />
                </div>
                <h2 className="mt-2">{data.titulo}</h2>
                <div className='w-[90%] h-auto'>
                    <p className="w-full h-full mb-2 p-2 text-amber-900">{data.descripcion}</p>
                </div>
                <h2 className="text-xl mb-5">{`${data.precio.toFixed(2)} €`}</h2>
            </div>
      </Modal>
    </div>
  );
}

export default ModalProducto