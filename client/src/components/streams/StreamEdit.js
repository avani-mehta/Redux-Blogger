import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  ComponentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

onSubmit = (formValues) => {
  this.props.editStream(this.props.match.params.id, formValues)
}
//initialValues prop will be used as the initial values on the form
//_.pick will create a new object with the listed properties like title and Description
  render() {
    return (
      <div>
        <h3>Edit Blog</h3>
        <StreamForm onSubmit={this.onSubmit}
        initialValues={_.pick(this.props.stream, 'title', 'description')} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
