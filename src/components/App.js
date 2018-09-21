import React from 'react';
import '../style/_buddle.css';
import ChartImage from '../resources/chart.png';
import MenuSlide from './Menu';
import ActivityCard from './ActivityCard';

const HamburgMenu = (props) => {
    const menu = [...Array(3)];
    return menu.map((data, index) => {
        return <div key={`menu-hamburg-${index}`} className='Item' onClick={() => props.OnClick()}></div>;
    });
};

class App extends React.PureComponent {
    constructor() {
        super();
        this.state = {};
    }

    handleMenuSlide = (overlayClass, slideClass) => {
        this.setState({overlayClass, slideClass});
    }
    render() {
        return (
            <div>
                <MenuSlide slideClass={this.state.slideClass} />
                <div className='Menu-Hamburg'><HamburgMenu OnClick={() => this.handleMenuSlide('Show', 'Open')} /></div>
                <img src={ChartImage} className='Chart-Image' alt="ChartImage" />
                <div className='Activity'>
                    <div className="Activity-Title">Activity</div>
                    <ActivityCard />
                </div>
                <div className={`Overlay ${this.state.overlayClass}`}>
                    <div className="Overlay-Close-Button" onClick={() => this.handleMenuSlide('', '')}>X</div>
                </div>
            </div>
        );
    }
}

export default App;
