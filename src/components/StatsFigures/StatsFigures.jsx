import PropTypes from 'prop-types';

export const StatsFigures = ({ state, buttons, total, share }) => {
    return (
        <ul>
            {buttons.map((item, index) => (
                <li key={index}>
                    <p>
                        {item}: <span>{state[item.toLowerCase()]}</span>
                    </p>
                </li>
            ))}
            <li>
                <p>
                    Total: {total()}
                </p>
            </li>
            <li>
                <p>
                    Positive feedback: {share()}%
                </p>
            </li>
        </ul>
    );
};

StatsFigures.propTypes = {
    state: PropTypes.object.isRequired,
    buttons: PropTypes.array.isRequired,
    total: PropTypes.func.isRequired,
    share: PropTypes.func.isRequired,
};