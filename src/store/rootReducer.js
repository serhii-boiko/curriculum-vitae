import { combineReducers } from 'redux';
import auth from '@src/reducers/auth';
import questions from '@src/reducers/questions';

export default combineReducers({
  auth,
  questions,
});
