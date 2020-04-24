import { ADD_LOADER, REMOVE_LOADER } from "../action/constants";

export function loaderReducer(
  state = [{ id: 1, name: "Kyk", duration: 3 }],
  action
) {
  switch (action.type) {
    case ADD_LOADER:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          duration: action.duration,
        },
      ];
    case REMOVE_LOADER:
      return [...state.slice(0, action.i), ...state.slice(action.i + 1)];
    default:
      return state;
  }
  return state;
}
