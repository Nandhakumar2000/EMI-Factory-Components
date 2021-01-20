import React from 'react';
import './App.css';
import OutLineButton from './Components/Buttons/OutLineButton';
import './App.scss';
import FillButton from './Components/Buttons/FillButton';
import SearchBar from './Components/Inputs/SearchBar';
import AppBar from './Components/Header/AppBar';
import SortIcon from '@material-ui/icons/Sort';
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div className="App" style={{margin:"200px 200px"}}>
      <Container>
     <Row>
      <Col sm="3"><OutLineButton dispText="Sign In" icon={<SortIcon></SortIcon>}></OutLineButton> </Col>
        <Col sm="3"><OutLineButton dispText="Sign In" ></OutLineButton> </Col>
        <Col sm="3"><FillButton dispText="Sign In"></FillButton></Col>
        <Col sm="3"> <FillButton dispText="Sign In" icon={<SortIcon></SortIcon>}></FillButton> </Col>
        </Row>
<br/>
        <Row>
          <Col sm="3"><SearchBar placeholderText="&#xf002; Search"></SearchBar></Col>
          <Col sm="3"><AppBar placeholderText="Hello"/></Col>
        </Row>
      </Container>
    <br/>
    
    </div>
  );
}

export default App;
