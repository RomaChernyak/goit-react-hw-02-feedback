import React, { Component } from 'react';

import { Title } from "./Title/Title";
import { Button } from "./Button/Button";

export class ReviewsWidget extends Component {
    render() {
        return (
            <div className="review-widget">
                ReviewsWidget Start
                <Title
                    text={"Please leave feedback"}
                />
                <ul className="buttons">
                    <li>
                        <Button
                            name={"Good"}
                            onClick={() => {
                                console.log('Кликнули на первую кнопку');
                            }}
                        />
                    </li>
                    <li>
                        <Button
                            name={"Neutral"}
                            onClick={() => {
                                console.log('Кликнули на вторую кнопку');
                            }}
                        />
                    </li>
                    <li>
                        <Button
                            name={"Bad"}
                            onClick={() => {
                                console.log('Кликнули на третюю кнопку');
                            }}
                        />
                    </li>
                </ul>

                <Title
                    text={"Statistics"}
                ></Title>
                <ul className="stats">
                    <li>
                        <p>
                            `Good: {0}`
                        </p>
                    </li>
                    <li>
                        <p>
                            `Neutral: {0}`                        
                        </p>
                    </li>
                    <li>
                        <p>
                            `Bad: {0}`                        
                        </p>
                    </li>
                </ul>
                <span>
                    `Total: {0}`
                </span>
                <span>
                    `Positive feedback: {0}`
                </span>
                <br/>
                ReviewsWidget End
            </div>
        )
    }
};

// export const ReviewsWidget = () => {
//     return (
//         <>
//             ReviewsWidget Start
//             <Title
//                 text={"Please leave feedback"}
//             ></Title>
//             <ul className="buttons">
//                 <li>
//                     <Button name={"Good"} />
//                 </li>
//                 <li>
//                     <Button name={"Neutral"} />
//                 </li>
//                 <li>
//                     <Button name={"Bad"} />
//                 </li>
//             </ul>
//             <Title
//                 text={"Statistics"}
//             ></Title>
//             <ul className="stats">
//                 <li>
//                     <p>
//                         `Good: {2}`
//                     </p>
//                 </li>
//                 <li>
//                     <p>
//                         `Neutral: {2}`                        
//                     </p>
//                 </li>
//                 <li>
//                     <p>
//                         `Bad: {2}`                        
//                     </p>
//                 </li>
//             </ul>
//             <span>
//                 `Total: {6}`
//             </span>
//             <span>
//                 `Positive feedback: {6}`
//             </span>
//             <br/>
//             ReviewsWidget End
//         </>
//     );
// };