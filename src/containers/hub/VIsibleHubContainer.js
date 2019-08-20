import React, { useState } from 'react';
import './hub.scss';
import HubMenuLinkComponent from './components/hubMenuLink';

const VisibleHubContainer = (props) => {
    const [currentIndexSelected, setCurrentIndexSelected] = useState(props.data.hub.pages.length + 1);

    const handleToogleHover = (index) => currentIndexSelected === index ? setCurrentIndexSelected(props.data.hub.pages.length + 1) : setCurrentIndexSelected(index);
    const onLinkClicked = (page) => props.history.push(page.routerUrl, page.props);

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
                    return <HubMenuLinkComponent page={page} toggleHover={handleToogleHover.bind(this, index)}
                        anotherHovered={currentIndexSelected !== index && currentIndexSelected <= props.data.hub.pages.length}
                        onClick={onLinkClicked.bind(this, page)}
                        key={page.key}

                    />;
                })}

            </div>
        </div>
    );
}

export default VisibleHubContainer;