import React from 'react';
import '../hub.scss';

const HubMenuLinkComponent = ({page, anotherHovered , toggleHover}) => {
    const onMouseEnter = () => { toggleHover(); }
    const onMouseLeave = () => { toggleHover(); }
    console.log(page.key, anotherHovered);
    return (<a onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={"HubButton"} onClick={() => {
        // props.history.push(page.routerUrl, page.props);
    }}>
        {page.props.pageLabel.split("").map((letter) => {
            return <div className={anotherHovered ? "HubButtonLetterAccent" : "HubButtonLetter"}>{letter}</div>
        })}
    </a>)
}


export default HubMenuLinkComponent;