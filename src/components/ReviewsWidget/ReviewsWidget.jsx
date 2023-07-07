import { Title, ButtonGroup, StatsFigures, Notification } from 'components';

// import data from "../../backend/data.json"

// console.log(data.buttonName);

export const ReviewsWidget = ({
    data: { buttons, message },
    update,
    state,
    total,
    share
}) => {
    return (
        <div className="review-widget">
            <Title
                text={"Please leave feedback"}
            />
            <ButtonGroup
                update={update}
                buttons={buttons}
            />
            <Title
                text={"Statistics"}
            ></Title>
            <StatsFigures
                state={state}
                buttons={buttons}
                total={total}
                share={share}
            />
            <Notification message={message} />
        </div>
    );
};

