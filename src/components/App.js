import React from 'react';
import '../style/buddle.css';
import ChartImage from '../resources/chart.png';
import AvatarImage from '../resources/avatar.png';
import MenuSlide from './Menu'

const ActivityCard = () => (
    <div className="Activity-Card">
        <img src={AvatarImage} className='Activity-Card-Avatar' alt="Avatar" />
    </div>
);

const HamburgMenu = (props) => {
    const menu = [...Array(3)];
    return menu.map((data, index) => { return <div key={`menu-hamburg-${index}`} className='Item' onClick={() => props.OnClick()}></div> })
};

class App extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            cards: [...Array(4)]
        }
    }

    renderActivityCards = () => {
        return this.state.cards.map((data, index) => { return <ActivityCard key={`activity-card-${index}`} /> })
    }

    handleClickHamburgIcon = () => {
        this.setState({ overlayClass: 'Show', slideClass: 'Open' });
    }

    handleClickClose = () => {
        this.setState({ overlayClass: '', slideClass: '' });
    }
    render() {
        return (
            <div>
                <MenuSlide slideClass={this.state.slideClass} />
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

export default App;
