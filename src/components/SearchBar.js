import React from 'react';
import {Link} from 'react-router';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Search for a song or band</h1>
        <p>Some other text about tabs and what to do.</p>
        <div className="row">            
          <div className="col-lg-9">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for..." />
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;