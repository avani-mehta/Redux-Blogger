import streams from '../apis/streams'; //importing instance of axios
//formValues will have all those streams that we create using our app and pass to createStream action creator
import history from '../history';//importing our created history object

export const createStream = (formValues) => {
  return async (dispatch) => {
    const response = await streams.post('/streams', formValues);//making a post request with axios and 'response' will collect the saved record of the stream we create
    dispatch({ type: 'CREATE_STREAM', payload: response.data });
    //Do some programmatic navigation to get the user back to the root route
    history.push('/');
  }
};

export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await streams.get('/streams');
    dispatch({ type: 'FETCH_STREAMS', payload: response.data });
  }
};

export const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await streams.get('/streams/${id}');
    dispatch({ type: 'FETCH_STREAM', payload: response.data });
  }
};

export const editStream = (id, formValues) => {
  return async (dispatch) => {
    const response = await streams.put('/streams/${id}', formValues);
    dispatch({ type: 'EDIT_STREAM', payload: response.data });
    history.push('/');
  }
};

export const deleteStream = (id) => {
  return async (dispatch) => {
    await streams.delete('/streams/${id}');
    dispatch({ type: 'DELETE_STREAM', payload: id });
    history.push('/');
  }
};
