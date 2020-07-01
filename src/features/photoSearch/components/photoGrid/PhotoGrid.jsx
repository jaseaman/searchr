import GridList from "@material-ui/core/GridList";
import React, {useState} from "react";
import PropTypes from 'prop-types';
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {makeStyles} from "@material-ui/core/styles";
import PhotoModal from "./PhotoModal";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles(theme => ({
    gridContainer: {
        marginTop: '16px'
    },
    gridItem: {
        cursor: 'pointer'
    }
}))

const PhotoGrid = ({photos, loading, gridSize}) => {
    const classes = useStyles();

    const [selectedPhoto, setSelectedPhoto] = useState();
    const [modalOpen, setModalOpen] = useState(false);

    const handlePhotoClicked = (photo) => {
        setSelectedPhoto(photo);
        setModalOpen(true);
    }

    const handleModalClosed = () => {
        setModalOpen(false);
        setSelectedPhoto(null);
    }

    return (
        <>
            <PhotoModal photo={selectedPhoto} open={modalOpen} onClose={handleModalClosed}/>
            <GridList cellHeight={240} cols={gridSize} className={classes.gridContainer}>
                {loading ? [1, 2].map((i) => <Skeleton key={i} height={240}/>)
                    : photos.map((photo, i) =>
                        <GridListTile onClick={() => handlePhotoClicked(photo)} className={classes.gridItem} key={i}>
                            <img style={{objectFit: 'cover'}} src={photo.url} alt={photo.description}/>
                            <GridListTileBar
                                title={photo.description}
                                subtitle={<span>by: {photo.createdBy}</span>}
                            />
                        </GridListTile>
                    )}
            </GridList>
        </>
    )
}

PhotoGrid.propTypes = {
    photos: PropTypes.any.isRequired,
    gridSize: PropTypes.number,
    loading: PropTypes.bool
}

export default PhotoGrid;
