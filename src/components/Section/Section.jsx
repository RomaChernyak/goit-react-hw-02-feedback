import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
    return (
        <div className="review-widget">
            {title && <h2 className="title">{title}</h2>}

            {children}
        </div>
    );
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};