import { combineReducers } from "redux";
import { BoardReducer } from "./BoardsReducer";
import { ModalReducer } from "./ModalReducer";
import { CardReducer } from "./CardReducer";

const reducers = combineReducers({
  BoardReducer,
  ModalReducer,
  CardReducer
});

export default reducers;
