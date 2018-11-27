import React from 'react';
import loaderSm from '../img/loader-sm.svg'
 class TickerRow extends React.Component{
   render(){
     const {ticker, channel} = this.props;
     let vol = <img src={loaderSm} alt="0000"/>;
     let price =<img src={loaderSm} alt="0000"/>;
     let change = <img src={loaderSm} alt="0000"/>;
     let check = 0;
     if(ticker.length > 0 && ticker !== undefined) {
       vol = (ticker[1][7] / 1000).toFixed(3);
       price = ticker[1][6].toFixed(6)
       change = (ticker[1][5] * 100).toFixed(2).toString().replace("-","")
       check = ticker[1][5];
     }
     return(<tr>
       <td>{channel}</td>
       <td>{price}</td>
       <td>{vol}</td>
      <td className={check > 0 ? "text-success" : "text-danger"}>{change}%</td>
       </tr>)
   }
}
export default TickerRow;
