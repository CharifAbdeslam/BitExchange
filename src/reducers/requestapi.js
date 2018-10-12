import { LIVE_TICKERETH} from "../actions/index.js";
const INITIAL_STATE = {tickerEth:[]};

export default(state=INITIAL_STATE,action)=>{
  switch (action.type) {
    case LIVE_TICKERETH:
      return Object.assign({},state,{tickerEth:action.payload})
    default:
     return state
    }
  }
