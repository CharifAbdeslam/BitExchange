import React from 'react';
import loaderSm from '../img/loader-sm.svg';
import {connect} from 'react-redux';
import {_getTicker} from '../actions/index';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSortDown from '@fortawesome/fontawesome-free-solid/faSortDown';
import {Row , Col} from 'reactstrap';
class LiveTicker extends React.Component {
  componentDidMount() {
      this.props._getTicker();
  }
  render(){
    return (<div className="exchange-field ml-2 text-center">
      <Row className="pl-2">
        <Col xs="3 p-0">
        <span className="cc ETH m-0"></span>
      </Col>
      <Col xs="4 text-center pt-2 pr-0 pl-0">
        <span className="market-ticker">ETH/BTC</span><br></br>
        <span className="market-vol">VOL</span>
        <img src={loaderSm} alt="0000" className="ml-3 mr-3 mb-1" />
        <span className="market-vol">BTC</span><br></br>
        <span className="market-vol">LOW</span>
        <img src={loaderSm} alt="0000" className="ml-3 mr-3 mb-1" />
      </Col>
      <Col xs="5 text-center pt-2 pr-0 pl-0">
        <img src={loaderSm} alt="0000" className="ml-3 mr-3 mb-1" /><br></br>
        <span className="text-danger exchange-percent">0.00 <FontAwesomeIcon icon={faSortDown}/> (
          0.00%)
        </span><br></br>
<span className="market-vol">HIGH</span>
<img src={loaderSm} alt="0000" className="ml-3 mr-3 mb-1" />
      </Col>
    </Row>
    </div>
    );
  }
}
const mapStateToProps = state =>({
  tickerEth:state.price.tickerEth})
export default connect(mapStateToProps,{_getTicker})(LiveTicker);
