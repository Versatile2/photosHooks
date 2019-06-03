import React, {
    Fragment, useState
} from 'react';
import useDataApi from '../../hooks/hub/hubAction';
import composeQuery from '../../utils/urlUtil';
import urls from '../../assets/url';
import SearchInputComponent from '../../components/integration/searchInput';
const baseSearchQuery = '';


const VisibleNewsContainer = (props) => {
    console.log('News' , props.location.state);

    const [query, setQuery] = useState(baseSearchQuery);
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        composeQuery(urls.hits, baseSearchQuery),
        { hits: [] },
    );

    const renderLoading = () => {
        return (< div > Loading ...</div >);
    }

    const renderContent = (hits) => {
        return (<ul>
            {hits.map(item => (
                <li key={item.objectID}>
                    <a href={item.url}>{item.title}</a>
                </li>
            ))}
        </ul>);
    }

    const renderSearchForm = (value, onSubmit, onChange) => {
        return (<form onSubmit={onSubmit}>
            <SearchInputComponent value={value} onSubmit={onSubmit} onChange={onChange}></SearchInputComponent>
            <button type="submit">Search</button>
        </form>)
    }

    return (
        <Fragment>
            <a href="/">Back to hub</a>
            {renderSearchForm(query, event => {
                doFetch(composeQuery(urls.hits, query));
                event.preventDefault();
            }, event => setQuery(event.target.value))}
            {isError && <div>Something went wrong ...</div>}
            {isLoading ? renderLoading() : renderContent(data.hits)}
        </Fragment>
    );
}

export default VisibleNewsContainer;