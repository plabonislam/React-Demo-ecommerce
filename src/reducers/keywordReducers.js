
import { KEY_WORD, SUB_TOTAL } from "../constant/searchKeyconstants";

function keywordReducers(state = { keyword: ""}, action) {
  switch (action.type) {
    case KEY_WORD: {
    
      return { loading: false, keyword: action.payload };
    }

    default:
      return state;
  }
}




function subTotalReducers(state = { sTotal: 0 }, action) {
  switch (action.type) {
    case SUB_TOTAL: {
       
      return { loading: false, sTotal: action.payload };
    }

    default:
      return state;
  }
}

export { keywordReducers, subTotalReducers };
