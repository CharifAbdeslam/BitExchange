import React from 'react';
import LiveTicker from './LiveTicker';
import MarketRow from './MarketRow';
import OrderForm from './OrderForm';
import {Row , Col , Container} from 'reactstrap';

const LeftWrapper =()=> {
    return(<div>
      <LiveTicker />
      <MarketRow />
      <OrderForm />
    </div>
    );
}
export default LeftWrapper;
