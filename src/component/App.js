import React from 'react';
import {Row , Col , Container} from 'reactstrap';
import MenuExchange from './MenuExchange';
import LeftWrapper from './LeftWrapper';
import RightWrapper from './RightWrapper';
const App =()=> {
    return (<Container fluid className="p-0">
      <MenuExchange />
           <Row className="mt-2 pr-2">
             <Col xs="2" style={{minWidth:'320px'}}>
              <LeftWrapper />
             </Col>
             <Col className="pl-0">
               <RightWrapper />
             </Col>
           </Row>
    </Container>

    );
}

export default App;
