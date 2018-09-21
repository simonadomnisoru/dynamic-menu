import React from 'react';
import AvatarImage from '../resources/avatar.png';

const activityCardsItems = [
    {
        id: 0,
        amount: ' - 0.0789 ETH',
        dates: '12:31 - July 8 2018',
        isSent: false
    },
    {
        id: 1,
        amount: ' + 0.5507 ETH',
        dates: '12:31 - July 8 2018',
        isSent: true
    },
    {
        id: 2,
        amount: ' + 1.5644 ETH',
        dates: '12:31 - July 8 2018',
        isSent: true
    },
    {
        id: 3,
        amount: ' + 0.5345 ETH',
        dates: '12:31 - July 8 2018',
        isSent: true
    },
];

const ActivityCard = () => {
    return activityCardsItems.map((data, index) => {
        let colorAmount = data.isSent ? 'Green' : 'Red';
        let verb = data.isSent ? 'From ' : 'To ';
        return (
            <div className="Activity-Card" key={`activity-card-${data.id}`}>
                <table className='Activity-Card-Table'>
                    <tbody>
                        <tr>
                            <td ><img src={AvatarImage} className='Activity-Card-Avatar' alt="Avatar" /></td>
                            <td className='Text-Small'><div>{verb}Tayler Jackson</div><div>{data.dates}</div></td>
                            <td><div className={`Text-Small ${colorAmount}`}>{data.amount}</div></td>
                        </tr >
                    </tbody>
                </table>
            </div>);
    });
};

export default ActivityCard;