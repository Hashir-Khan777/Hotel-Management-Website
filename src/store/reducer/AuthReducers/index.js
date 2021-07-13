const INITIAL_STATE = {
  user: localStorage.getItem("Users")
    ? JSON.parse(localStorage.getItem("Users"))
    : null,
};

export const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_USER_REQUEST":
      return {
        loading: true,
      };

    case "CREATE_USER_SUCCESS":
      return {
        loading: false,
        user: action.payload,
      };

    case "CREATE_USER_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    case "LOGIN_USER_REQUEST":
      return {
        loading: true,
      };

    case "LOGIN_USER_SUCCESS":
      return {
        loading: false,
        user: action.payload,
      };

    case "LOGIN_USER_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    case "USER_LOGGEDOUT":
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};
