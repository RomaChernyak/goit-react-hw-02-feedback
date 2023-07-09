import PropTypes from 'prop-types';
import css from "./Statistics.module.css";

export const Statistics = ({ state, buttons, total, positivePercentage }) => {
    const pct = positivePercentage();
    
    return (
        <ul className={css.statsContainer}>
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
                    Positive feedback: {pct}%
                    {" "}
                    {
                        pct >= 80
                            ?
                            '🤩'
                            :
                            (pct >= 50
                                ?
                                '😏'
                                :
                                (pct >= 20
                                    ?
                                    '😐'
                                    :
                                    '🗿🗿🗿'
                                )
                            )
                    }
                </p>
            </li>
        </ul>
    );
};

Statistics.propTypes = {
    state: PropTypes.object,
    buttons: PropTypes.array,
    total: PropTypes.func,
    positivePercentage: PropTypes.func,
};