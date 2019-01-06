import React from 'react';
import { Field, reduxForm } from 'redux-form'; //reduxForm is also a function does the work of connect() (we use this in order to show a form) and Field is a react Component

class StreamForm extends React.Component {
renderError({ error, touched}) {
  if (touched && error) {
    return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    );
  }
}

  renderInput = ({ input, label, meta }) => {
    const className = 'field ${meta.error && meta.touched ? error : hey};'
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error">
      <Field name="title" label="Enter the Title" component={this.renderInput} />
      <Field name="description" label="Enter a Description" component={this.renderInput} />
      <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You mus enter a description";
  }

  return errors;
}

// export default reduxForm({
//   form: 'streamCreate', //this is just the name of the-can be anything meaningfull
//   validate
// })(StreamCreate); //reduxForm({}) recieves a single object which needs to be filled with configuration; unlike connect where we fill it with arguments

//Write the way as commented above OR this way as shown below:
export default reduxForm({
   form: 'streamForm', //this is just the name of the form-can be anything meaningfull
   validate
 })(StreamForm);
