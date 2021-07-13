import firebase from "../../../config/firebase";

const LoginWithEmailAndPassword = (obj) => (dispatch) => {
  dispatch({
    type: "LOGIN_USER_REQUEST",
  });
  try {
    firebase
      .auth()
      .signInWithEmailAndPassword(obj.email, obj.password)
      .then((user) => {
        firebase
          .firestore()
          .collection("Users")
          .doc(user.user.uid)
          .get()
          .then((data) => {
            dispatch({
              type: "LOGIN_USER_SUCCESS",
              payload: data.data(),
            });
            localStorage.setItem("Users", JSON.stringify(data.data()));
          });
      })
      .catch((err) => {
        dispatch({
          type: "LOGIN_USER_FAIL",
          payload: err.message,
        });
      });
  } catch (err) {
    dispatch({
      type: "LOGIN_USER_FAIL",
      payload: err.message,
    });
  }
};

const CreateUserWithEmailAndPassword = (obj) => (dispatch) => {
  dispatch({
    type: "CREATE_USER_REQUEST",
  });
  try {
    firebase
      .auth()
      .createUserWithEmailAndPassword(obj.email, obj.password)
      .then((user) => {
        firebase
          .firestore()
          .collection("Users")
          .doc(user.user.uid)
          .set({ ...obj, _id: user.user.uid });
        dispatch({
          type: "CREATE_USER_SUCCESS",
          payload: obj,
        });
        localStorage.setItem("Users", obj);
      })
      .catch((err) => {
        dispatch({
          type: "CREATE_USER_FAIL",
          payload: err.message,
        });
      });
  } catch (err) {
    dispatch({
      type: "CREATE_USER_FAIL",
      payload: err.message,
    });
  }
};

const Logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({
    type: "USER_LOGGEDOUT",
  });
};

export { LoginWithEmailAndPassword, CreateUserWithEmailAndPassword, Logout };
