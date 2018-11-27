import React from 'react';
import loaderSm from '../img/loader-sm.svg';
import {connect} from 'react-redux';
import {_getTicker} from '../actions/index';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSortDown from '@fortawesome/fontawesome-free-solid/faSortDown';
import faSortUp from '@fortawesome/fontawesome-free-solid/faSortUp';
import {Row , Col} from 'reactstrap';
class LiveTicker extends React.Component {
  componentDidMount(){
      this.props._getTicker();
  }
  render(){
    const {ticker} = this.props;
      let vol = <img src={loaderSm} alt="0000" className="ml-3 mr-3 mb-1"/>;
      let low = <img src={loaderSm} alt="0000" className="ml-3 mr-3 mb-1" />;
      let hight = <img src={loaderSm} alt="0000" className="ml-3 mr-3 mb-1" />;
      let avg = <img src={loaderSm} alt="0000" className="ml-3 mr-3 mb-1" />;
      let daylichange = "0.00";
      let daylichangePre = "0.00";
      let check = 0;
      if(ticker.length > 0 && ticker !== undefined) {
        vol = (ticker[1][7] / 1000).toFixed(3);
        low = ticker[1][9].toFixed(6);
        hight = ticker[1][8].toFixed(6);
        avg = ticker[1][6].toFixed(6);
        daylichange = (ticker[1][5] * 100).toFixed(2).toString().replace("-","");
        daylichangePre = ticker[1][4].toFixed(2).toString().replace("-","");
        check = ticker[1][5];
      }
    return (<div className="exchange-field ml-2 text-center">
      <Row className="pl-2">
        <Col xs="3 p-0">
        <span className="cryptoicon cc ETH m-0"></span>
      </Col>
      <Col xs="4 text-center pt-1 pr-0 pl-0">
        <span className="market-ticker">ETH/BTC</span><br></br>
        <span className="market-vol">VOL</span> <span className="priceFont">{vol} </span>
        <span className="market-vol">BTC</span><br></br>
        <span className="market-vol">LOW</span> <span className="priceFont">{low} </span>
      </Col>
      <Col xs="5 text-center pt-1 pr-0 pl-0">
        <span className="text-gray">{avg}</span><br></br>
        <span className={check > 0 ? "text-success " + "exchange-percent":"text-danger " + "exchange-percent"}>
          {daylichangePre}<FontAwesomeIcon icon={check > 0 ? faSortUp : faSortDown}/> (
          {daylichange}%)
        </span><br></br>
<span className="market-vol">HIGH</span> <span class="priceFont">{hight} </span>
      </Col>
    </Row>
    </div>
    );
  }
}
const mapStateToProps = state =>({ticker:state.price.tickerEth})
export default connect(mapStateToProps,{_getTicker})(LiveTicker);
