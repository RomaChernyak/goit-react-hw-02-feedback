import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
    return <div className="message">
        {message && <p className="message">{message}</p>}
    </div>;
};

Notification.propTypes = {
    message: PropTypes.string,
};