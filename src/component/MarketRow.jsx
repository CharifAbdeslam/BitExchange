import React from 'react';
import {Row , Col ,Table} from 'reactstrap';
import {connect} from 'react-redux';
import TickerRow from './TickerRow';
const MarketRow =({tickerEth,tickerBch,tickerXrp,
                   tickerLtc,tickerXmr,tickerEtc,
                   tickerIot,tickerDsh,tickerNeo,
                   tickerZec,tickerEos,tickerOmg,
                   tickerXvg,tickerGnt,tickerQtm})=> {
  return (
    <div className="exchange-field ml-2 mt-2">
    <label className="titlle-tickers ml-2">TICKERS</label>
      <Table  responsive>
      <thead>
              <tr>
                <th>SYMBOL</th>
                <th>PRICE</th>
                <th>VOLUME</th>
                <th>CHANGE</th>
              </tr>
      </thead>
            <tbody>
            <TickerRow channel={"ETH/BTC"} ticker={tickerEth}/>
            <TickerRow channel={"XRP/BTC"} ticker={tickerXrp}/>
            <TickerRow channel={"LTC/BTC"} ticker={tickerLtc}/>
            <TickerRow channel={"XMR/BTC"} ticker={tickerXmr}/>
            <TickerRow channel={"ETC/BTC"} ticker={tickerEtc}/>
            <TickerRow channel={"IOT/BTC"} ticker={tickerIot}/>
            <TickerRow channel={"DSH/BTC"} ticker={tickerDsh}/>
            <TickerRow channel={"NEO/BTC"} ticker={tickerNeo}/>
            <TickerRow channel={"ZEC/BTC"} ticker={tickerZec}/>
            <TickerRow channel={"EOS/BTC"} ticker={tickerEos}/>
            <TickerRow channel={"OMG/BTC"} ticker={tickerOmg}/>
            <TickerRow channel={"XVG/BTC"} ticker={tickerXvg}/>
            <TickerRow channel={"GNT/BTC"} ticker={tickerGnt}/>
            <TickerRow channel={"QTM/BTC"} ticker={tickerQtm}/>
            </tbody>
      </Table>

    </div>
);
}
const mapStateToProps = state =>({
                                  tickerEth:state.price.tickerEth,
                                  tickerXrp:state.price.tickerXrp,
                                  tickerLtc:state.price.tickerLtc,
                                  tickerXmr:state.price.tickerXmr,
                                  tickerEtc:state.price.tickerEtc,
                                  tickerIot:state.price.tickerIot,
                                  tickerDsh:state.price.tickerDsh,
                                  tickerNeo:state.price.tickerNeo,
                                  tickerZec:state.price.tickerZec,
                                  tickerEos:state.price.tickerEos,
                                  tickerOmg:state.price.tickerOmg,
                                  tickerXvg:state.price.tickerXvg,
                                  tickerGnt:state.price.tickerGnt,
                                  tickerQtm:state.price.tickerQtm,
})
export default connect(mapStateToProps)(MarketRow);
