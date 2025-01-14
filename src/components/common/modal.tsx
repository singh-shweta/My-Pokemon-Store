import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

/**
 * Its a parent driven modal.
 * The open property willbe driven by the parent component.
 */
interface DialogProps {
  onCloseModal: () => void;
  title: React.ReactNode | string;
  openModal: boolean;
  children: React.ReactNode;
}
const style = {
  color: 'black',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  '& *': {
    color: '#282828',  
  },
};
export const DetailsDialog: React.FC<DialogProps> = ({onCloseModal, title, openModal, children}) => {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={onCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {children}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}