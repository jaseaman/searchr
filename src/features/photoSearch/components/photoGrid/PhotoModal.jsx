import React from 'react';
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";

const PhotoModal = ({photo, open, onClose}) => {

    const handleClose = () => {
        if (onClose) onClose();
    }

    return (
        <Dialog
            fullWidth={true}
            maxWidth={'lg'}
            open={open}
            onClose={handleClose}
        >
            {photo?.description && <DialogTitle>{photo.description}</DialogTitle>}
            <DialogContent>
                <img style={{width: '100%', height: '100%'}} src={photo?.url} alt={photo?.description}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>)
}

export default PhotoModal;
