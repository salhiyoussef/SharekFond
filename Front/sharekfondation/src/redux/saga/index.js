import { all } from "redux-saga/effects";

import {
  setPagesCurrentWatcher,
  postNewUsersWatcher,
  loginUserWatcher,
  lougoutUsersWatcher
} from "./layoutSaga";


import {
    getAllUsersWatcher,
    getUserEmailWatcher,
    deleteUserWatcher,
    postNewUserWatcher,
    putUserWatcher
  } from "./usersSaga";
  export default function* rootSaga() {
    yield all([ 
      //  L A Y O U T
      setPagesCurrentWatcher(),
      postNewUsersWatcher(),
      loginUserWatcher(),
      lougoutUsersWatcher(),
      //  L A Y O U T

      //  U S E R S
      getAllUsersWatcher(),
      getUserEmailWatcher(),
      deleteUserWatcher(),
      postNewUserWatcher(),
      putUserWatcher(),
      //  U S E R S
    ]);
  }  