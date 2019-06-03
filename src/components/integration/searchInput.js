
import React from 'react';
import PropTypes from "prop-types";

const SearchInputComponent = ({ value, onChange, label }) => {
    return (
        <form>
            {label && <label htmlFor="component-simple">{label}</label>}
            <input id="component-simple" value={value} onChange={onChange} />
        </form>
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