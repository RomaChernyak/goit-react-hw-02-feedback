import PropTypes from 'prop-types';

export const Button = ({ item, update }) => {
    return <button type="button" onClick={update}>{item}</button>;
};

Button.propTypes = {
    item: PropTypes.string.isRequired,
    update: PropTypes.func.isRequired,
};