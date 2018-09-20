import React from 'react';
import ChartImage from '../scss/chart.png';
import AvatarImage from '../scss/avatar.png';

const ActivityCard = () => (
    <div className="Activity-Card">
        <img src={AvatarImage} className='Activity-Card-Avatar' alt="Avatar" />
    </div>
);

const HamburgMenu = (props) => {
    const menu = [...Array(3)];
    return menu.map((data, index) => { return <div key={`menu-hamburg-${index}`} className='Menu-Hamburg-Item' onClick={() => props.OnClick()}></div> })
};
class Home extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            cards: [...Array(4)],
            overlayClass: '',
        }
    }

    renderActivityCards = () => {
        return this.state.cards.map((data, index) => { return <ActivityCard key={`activity-card-${index}`} /> })
    }

    handleClickHamburgIcon = () => {
        this.setState({ overlayClass: 'Overlay-Show' });
    }

    handleClickClose = () => {
        this.setState({ overlayClass: '' });
    }
    render() {
        return (
            <div>
                <div className='Menu-Hamburg'><HamburgMenu OnClick={() => this.handleClickHamburgIcon()} /></div>
                <img src={ChartImage} className='Chart-Image' alt="ChartImage" />
                <div className='Activity'>
                    <div className="Activity-Title">Activity</div>
                    {this.renderActivityCards()}
                </div>
                <div className={`Overlay ${this.state.overlayClass}`}>
                    <div className="Overlay-Close-Button" onClick={() => this.handleClickClose()}>X</div>
                </div>
            </div>
        );
    }
}

export default Home;
