import React from 'react';
import {Row , Col , Container} from 'reactstrap';
import MenuExchange from './MenuExchange';
import LeftWrapper from './LeftWrapper';
const App =()=> {
    return (<Container fluid className="p-0">
      <MenuExchange />
           <Row className="mt-2">
             <Col xs="2" style={{minWidth:'320px'}}>
              <LeftWrapper />
             </Col>
           </Row>
    </Container>

    );
}

export default App;
