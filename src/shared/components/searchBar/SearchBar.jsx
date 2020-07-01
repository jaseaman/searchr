import Paper from "@material-ui/core/Paper";
import PropTypes from 'prop-types';
import React, {useState} from "react";
import InputBase from "@material-ui/core/InputBase";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    searchBarContainer: {
        padding: '8px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    searchInput: {
        marginLeft: '8px',
        flex: 1
    },
    searchButton: {
        padding: 10
    }
}))

const SearchBar = ({onSearch, disabled, className}) => {
    const classes = useStyles();
    const [searchText, setSearchText] = useState();

    const handleSearchTextChange = event => {
        setSearchText(event.target.value);
    }

    const handleKeyPress = event => {
        if (event.key === 'Enter' && onSearch) onSearch(searchText);
    }

    const handleSearchButton = () => {
        if (onSearch) onSearch(searchText);
    }

    return (
        <div className={className}>
            <Paper className={classes.searchBarContainer}>
                <InputBase
                    className={classes.searchInput}
                    placeholder="Search for an image by tag"
                    inputProps={{'aria-label': 'search for image'}}
                    onChange={handleSearchTextChange}
                    onKeyPress={handleKeyPress}
                    disabled={disabled}
                />
                <IconButton className={classes.searchButton} onClick={handleSearchButton} aria-label="search">
                    <SearchIcon/>
                </IconButton>
            </Paper>
        </div>
    )
}

SearchBar.propTypes = {
    onSearch: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string
}

export default SearchBar;
