export default function reducer(prevState, action) {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        userData: action.userData,
        isLoggedIn: true,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        isLoggedIn: false,
      };

    default:
      return prevState;
  }
}
