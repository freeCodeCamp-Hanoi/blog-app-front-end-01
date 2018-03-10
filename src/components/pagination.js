import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    return (
      <div className="pagination">
        <button className="btn btn-primary btn-previous">Previous</button>
        <button className="btn btn-primary btn-next">Next</button>
      </div>

    );
  }
}

export default Pagination;