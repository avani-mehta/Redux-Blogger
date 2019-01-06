//Component not used yet
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
  ComponentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    return <div>StreamDelete</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
