import Pagination from '@material-ui/lab/Pagination';
import {makeStyles} from "@material-ui/core/styles";
import React from "react";


const useStyles = makeStyles(theme => ({
    pagination: {
        justifyContent: 'center'
    }
}));

const FooterPagination = ({page, pages, onPageChange, className}) => {
    const classes = useStyles();

    const handlePageChange = (event, value) => {
        if (onPageChange) onPageChange(value);
    }

    return (
        <div className={className}>
            <Pagination classes={{ul: classes.pagination}} page={page} count={pages} onChange={handlePageChange}
                        showFirstButton showLastButton color="primary"/>
        </div>
    )
}

export default FooterPagination;
