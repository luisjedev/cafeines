import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useEffect, useState } from 'react';
import ListaAlergias from './elements/ListaAlergias';
import { borderRadius } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '89%',
  bgcolor: 'background.paper',
  borderRadius: '4px',
};

const ModalMaterialProducto = ({mostrarModal, ocultarModal, data, url_vacia}) => {
  const [open, setOpen] = useState(false);

  useEffect(() =>{
    if(mostrarModal){
        setOpen(true)
    }else{
        setOpen(false)
    }

  },[mostrarModal])

  return (
    <div className="w-full">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={ocultarModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <div className="w-full h-full flex flex-col justify-center items-center shadow-md">
                <div className="w-full flex justify-center">
                  {data.url !== null && data.url !== "" ?
                      <img src={data.url} className="w-full rounded"/>
                    :
                      <img src={url_vacia} className="w-full rounded"/>
                  }
                </div>
                <h2 className="mt-2">{data.nombre}</h2>
                <div className='w-[90%] h-auto'>
                    <p className="w-full h-full mb-2 p-2 text-amber-900">{data.descripcion}</p>
                </div>
                <div className="mb-3 flex justify-center items-center flex-col">
                  <h2 className='text-2xl mb-2'>Alergias</h2>
                  {data.alergias ?
                    <div>
                      <ListaAlergias alergias={data.alergias}/>
                    </div>
                  :
                    <p className='pt-1'>Libre de alergias comunes</p>
                  }
                </div>
                <h2 className="text-xl mb-3">{`${data.precio.toFixed(2)} €`}</h2>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalMaterialProducto;