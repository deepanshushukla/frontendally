import React from "react";
import {useSelector} from "react-redux";
import PropTypes from 'prop-types';

const DropdownFilter = ({ changeCategory,categoriesValues }) => {
    const category = useSelector((state) => state.okr.category);

    return (
        <select value={category} onChange={(event) => changeCategory(event.target.value)}>
            <option value="" disabled >
                Select Category
            </option>
            {categoriesValues &&
            categoriesValues.map((item) => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
        </select>
    );
};
DropdownFilter.propTypes = {
    changeCategory: PropTypes.func.isRequired,
    categoriesValues: PropTypes.array.isRequired,
};

export default DropdownFilter;
