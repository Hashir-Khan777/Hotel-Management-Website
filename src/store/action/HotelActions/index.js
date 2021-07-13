import firebase from "./../../../config/firebase";

const CreateHotel = (obj) => async (dispatch) => {
  dispatch({
    type: "CREATE_HOTEL_REQUEST",
  });
  try {
    firebase
      .storage()
      .ref("Hotels")
      .child(obj.image.name)
      .put(obj.image)
      .then(() => {
        firebase
          .storage()
          .ref("Hotels")
          .child(obj.image.name)
          .getDownloadURL()
          .then((image) => {
            let id = firebase.firestore().collection("Hotels").doc().id;
            firebase
              .firestore()
              .collection("Hotels")
              .doc(id)
              .set({ ...obj, image, _id: id });

            dispatch({
              type: "CREATE_HOTEL_SUCCESS",
              payload: [{ ...obj, image, _id: id }],
            });
          });
      });
  } catch (err) {
    dispatch({
      type: "CREATE_HOTEL_FAIL",
      payload: err.message,
    });
  }
};

const GetHotels = () => (dispatch) => {
  dispatch({
    type: "GET_HOTEL_REQUEST",
  });
  try {
    let arr = [];
    firebase
      .firestore()
      .collection("Hotels")
      .get()
      .then((data) => {
        data.forEach((snapshot) => {
          arr.push(snapshot.data());
        });
        dispatch({
          type: "GET_HOTEL_SUCCESS",
          payload: arr,
        });
      })
      .catch((err) => {
        dispatch({
          type: "GET_HOTEL_FAIL",
          payload: err.message,
        });
      });
  } catch (err) {
    dispatch({
      type: "GET_HOTEL_FAIL",
      payload: err.message,
    });
  }
};

const GetHotelById = (id) => (dispatch) => {
  dispatch({
    type: "GET_HOTEL_DETAIL_REQUEST",
  });
  try {
    firebase
      .firestore()
      .collection("Hotels")
      .doc(id)
      .get()
      .then((data) => {
        dispatch({
          type: "GET_HOTEL_DETAIL_SUCCESS",
          payload: data.data(),
        });
      })
      .catch((err) => {
        dispatch({
          type: "GET_HOTEL_DETAIL_FAIL",
          payload: err.message,
        });
      });
  } catch (err) {
    dispatch({
      type: "GET_HOTEL_DETAIL_FAIL",
      payload: err.message,
    });
  }
};

export { CreateHotel, GetHotels, GetHotelById };
