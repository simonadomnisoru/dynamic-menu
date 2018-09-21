import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faTag, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const menuItems = [
    {
        id: 0,
        name: 'WALLET',
        bold: true,
        icon: faWallet,
        active: true
    },
    {
        id: 1,
        name: 'All Coins',
    },
    {
        id: 2,
        name: 'Borrow',
    },
    {
        id: 3,
        name: 'Contacts',
    },
    {
        id: 4,
        name: 'Settings',
    },
    {
        id: 5,
        name: 'CROWDSALE',
        bold: true,
        icon: faDollarSign,
    },
    {
        id: 6,
        name: 'SPECIAL OFFERS',
        bold: true,
        icon: faTag,
    }
];

const MenuSlide = (props) => {
    return (
        <div className={`Menu-Slide ${props.slideClass}`}>
            <ul>
                {menuItems.map((data, index) => {
                    const activeItem = data.active ? 'Active' : '';
                    return <li key={`menu-slide-items-${data.id}`} className={`Menu-Slide-Items ${activeItem}`}>
                        {data.icon && <FontAwesomeIcon icon={data.icon}/>}{data.name}
                    </li>
                })}
            </ul>
            <hr className='Menu-Hr' />
            <button className='Menu-Button'>Sing Out</button>
        </div>
    );

}


export default MenuSlide;