import socketIOClient from 'socket.io-client';

export const LIVE_TICKERETH = "LIVE_TICKERETH";

const socket = socketIOClient('http://localhost:3002');
let tickerChannel = {};

socket.on("tickerChanell",function(data){
  tickerChannel = Object.assign({},data);
})

export const _getTicker =()=> dispatch =>{
  socket.on("ticker",function(data){
       if(tickerChannel.eth.chanId === data[0]){
        dispatch({type:LIVE_TICKERETH,payload:data})
       }
})
}
