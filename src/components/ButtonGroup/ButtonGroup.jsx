import PropTypes from 'prop-types';
// import { Button } from "../Button/Button";

export const ButtonGroup = ({ buttons, update }) => {
    return (
        <>
            <ul className="buttons">
                {
                    buttons.map((item, index) => (
                        <li key={index}>
                            <button type="button" onClick={update}>
                                {item}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

ButtonGroup.propTypes = {
    buttons: PropTypes.array.isRequired,
    update: PropTypes.func.isRequired,
};