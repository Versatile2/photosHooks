
import React from 'react';
import PropTypes from "prop-types";

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const SearchInputComponent = ({ value, onChange, label }) => {
    return (
        <FormControl>
            {label && <InputLabel htmlFor="component-simple">{label}</InputLabel>}
            <Input id="component-simple" value={value} onChange={onChange} />
        </FormControl>
    )
};

SearchInputComponent.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
    , label: PropTypes.string
};

// Same approach for defaultProps too
SearchInputComponent.defaultProps = {
    name: "Alan"
};

export default SearchInputComponent; 