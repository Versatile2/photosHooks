import React, { useState } from 'react';
import '../hub.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const HubMenuLinkComponent = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const onMouseToggle = () => { setIsHovered(!isHovered); props.toggleHover(); }

    return (<a onMouseEnter={onMouseToggle} onMouseLeave={onMouseToggle} className={"HubButton"} onClick={props.onClick}>

        {props.page.props.pageLabel.split("").map((letter) => {
            return <div className={props.anotherHovered ? "HubButtonLetterAccent" : "HubButtonLetter"}>{letter.toUpperCase()}</div>
        })}
        {isHovered && <div className="HubButtonLInkIcon"><FontAwesomeIcon icon={faArrowRight} /></div>}
    </a>)
}


export default HubMenuLinkComponent;



const ffv = { "hub": { "hubLabel": "Photo Hooks", "pages": [{ "key": "1", "routerUrl": "/news", "props": { "pageTitle": "Search your news !", "pageLabel": "News" } }, { "key": "2", "routerUrl": "/SimpleArchitecture", "props": { "pageTitle": "Search your newss !", "pageLabel": "LGXBW" } }] }, "envName": "LocalDev", "URL": "localhost:8090" }
