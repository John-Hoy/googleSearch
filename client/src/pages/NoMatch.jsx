import React from 'react';
import {Col,Row,Container} from '../components/Grid';
import Jumbotron from '../components/Jumbotron';

function NoMatch(){
     return(
          <Container fluid>
               <Row>
                    <Col size="md-12">
                         <Jumbotron>
                              <h1></h1>
                              <span>

                              </span>
                         </Jumbotron>
                    </Col>
               </Row>
          </Container>
     );
}

export default NoMatch;