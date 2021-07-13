const INITIAL_STATE = {
  Hotels: [],
};

export const HotelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_HOTEL_REQUEST":
      return {
        loading: true,
      };

    case "CREATE_HOTEL_SUCCESS":
      return {
        loading: false,
        Hotels: action.payload,
      };

    case "CREATE_HOTEL_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    case "CREATE_HOTEL_RESET":
      return {
        state,
      };

    case "GET_HOTEL_REQUEST":
      return {
        loading: true,
      };

    case "GET_HOTEL_SUCCESS":
      return {
        loading: false,
        Hotels: action.payload,
      };

    case "GET_HOTEL_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
