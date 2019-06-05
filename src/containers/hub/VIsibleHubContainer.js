import React, { useState } from 'react';
import './hub.scss';
import HubMenuLinkComponent from './components/hubMenuLink';

const VisibleHubContainer = (props) => {
    const [menuItems, setmenuItems] = useState([]);

    return (
        <div className={"HubContainer"}>
            <div className={"HubTitleContainer"}>
                <div className={"HubTitleLeftAction"}>
                    <p className={"HubTitle"} >{props.data.hub.hubLabel}</p>
                </div>
                <div className={"HubTitleRightAction"}>
                    <a>
                        close
                    </a>
                </div>
            </div>
            <div className={"HubButtonContainer"}>
                {props.data.hub.pages.map((page, index) => {
                    menuItems[index] = false;
                    return <HubMenuLinkComponent page={page} toggleHover={() => {
                        if (menuItems[index] === true) {
                            menuItems.forEach((item, itemIndex) => {
                                menuItems[itemIndex] = !(itemIndex === index);
                            });
                        } else {
                            menuItems.forEach((item, itemIndex) => {
                                menuItems[itemIndex] = itemIndex === index;
                            });
                        }
                        setmenuItems([...menuItems]);
                        console.log(menuItems)
                    }}
                        anotherHovered={menuItems[index]}
                        key={page.key}
                    />;
                })}
            </div>
        </div>
    );
}

export default VisibleHubContainer;