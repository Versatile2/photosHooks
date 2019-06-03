import React, { Fragment } from 'react';
import './hubStyle.scss';

const VisibleHubContainer = (props) => {
    console.log('HUB' , props);

    const renderLink = (page) => {
        return (
                <button  onClick={()  => {
                    props.history.push(page.routerUrl, page.props); 
                }}>
                {page.props.pageLabel}
                </button>
                )
    }

    return (
        <div className="App">
                {props.data.hub.hubLabel}
                {props.data.hub.pages.map((page) => {
                    return renderLink(page);         
                    })}
        </div>
    );
}

export default VisibleHubContainer;