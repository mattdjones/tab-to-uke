import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as searchActions from '../../searchActions';

class SearchBar extends React.Component {
  constructor(props, context) {
    super(props, context);
      this.state = {
       search: { text: "" }
      };

      this.onSearchChange = this.onSearchChange.bind(this);
      this.onClickSearch = this.onClickSearch.bind(this);
    }
  
  onSearchChange(event){
    const search = this.state.search;
    search.text = event.target.value;
    this.setState({search: search});
  }

  onClickSearch(){
    //alert(this.state.search.text);
    this.props.dispatch(searchActions.searchTab(this.state.search));
  }

  tabRow(){
    return <div key={index}>{tab.title}</div>;
  }


  render() {
    return (
      <div className="jumbotron">
        <h1>Search for a song or band</h1>
        <p>Some other text about tabs and what to do and stuff.</p>
        <div className="row">            
          <div className="col-lg-9">
            <div className="input-group">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Search for..."
                onChange={this.onSearchChange}
                value={this.state.search.text} />
              <span className="input-group-btn">
                <input 
                  className="btn btn-primary" 
                  type="submit"
                  value="Go!"
                  onClick={this.onClickSearch} />
              </span>
            </div>
          </div>
        </div>
        {this.props.tabs.map(this.tabRow)}
      </div>
    );
  }
}

SearchBar.PropTypes = {
    dispatch: PropTypes.func.isRequired,
    tabs: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
      tabs: state.tabs
    };
}

export default connect(mapStateToProps)(SearchBar);