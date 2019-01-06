import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams, deleteStream, editStream } from '../../actions';
import { Link } from 'react-router-dom';

//At line 10, calling action creator inside componentDidMount so that the list is fetched only once

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
//In line 19-20 we want that on click of delete we reach out to our API which will fetch that stream and delete it
  renderAdmin(stream) {
    return (
      <div className="right floated content">
        <Link to={`/blogs/edit/${stream.id}`}
        className="ui button primary">
          Edit
        </Link>
        <button onClick={() => this.props.deleteStream(stream.id)} className="ui button negative">
          Delete
        </button>
      </div>
    )
  }

  renderList() {
      return this.props.streams.map(stream => {
        return (
          <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
            <div className="content">
              {stream.title}
              <div className="description">{stream.description}</div>
            </div>
          </div>
        );
      });
  }

  renderCreate() {
    return (
      <div style={{ textAlign: 'right' }}>
        <Link to="/blogs/new" className="ui button primary">
          Create Stream
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>Blogs</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) };
} ;

export default connect(mapStateToProps, { fetchStreams, deleteStream, editStream })(StreamList);
