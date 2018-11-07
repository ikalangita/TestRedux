import { ADD_ARTICLE } from "../constants/action_types";

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  console.log(JSON.stringify(action));
  switch (action.type) {
    case ADD_ARTICLE:
      console.log("je suis ici");
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      console.log("je suis là");
      return state;
  }
};

export default rootReducer;
