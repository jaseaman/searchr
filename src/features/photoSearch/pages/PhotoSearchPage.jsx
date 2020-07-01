import Container from "@material-ui/core/Container";
import React, {useState} from "react";
import SearchBar from "../../../shared/components/searchBar/SearchBar";
import PhotoGrid from "../components/photoGrid/PhotoGrid";
import {useDispatch, useSelector} from "react-redux";
import {fetchPhotosRequest} from "../photos.actions";
import {getPhotoPages, getPhotos, getPhotosLoading} from "../photos.selectors";
import FooterPagination from "../../../shared/components/pagination/FooterPagination";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    container: {
        position: 'relative',
        top: '20%'
    },
    searchContainer: {
        marginTop: 16,
        marginBottom: 8
    },
    paginationContainer: {
        paddingTop: 16,
        paddingBottom: 32
    }
}))

const PhotoSearchPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [search, setSearch] = useState();
    const [page, setPage] = useState(1);

    const photos = useSelector(getPhotos);
    const photoPages = useSelector(getPhotoPages);
    const loading = useSelector(getPhotosLoading)

    const handleSearch = (searchText) => {
        setSearch(searchText);
        setPage(1);
        dispatch(fetchPhotosRequest({query: searchText}));
    }

    const handlePageChange = page => {
        setPage(page);
        dispatch(fetchPhotosRequest({query: search, page: page}));
    }

    return (
        <Container className={classes.container} maxWidth={"md"}>
            <Typography variant='h3' color='secondary' align='center'>Searchr</Typography>
            <SearchBar className={classes.searchContainer} onSearch={handleSearch} disabled={loading} />
            <PhotoGrid gridSize={2} photos={photos} loading={loading}/>
            {photoPages && <FooterPagination className={classes.paginationContainer} page={page} pages={photoPages} onPageChange={handlePageChange} />}
        </Container>
    )
}

export default PhotoSearchPage;
