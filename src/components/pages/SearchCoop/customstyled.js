import styled from "styled-components";
import {Col} from 'react-bootstrap'
import {  Link } from "react-router-dom";


export const SDivLB01 = styled.div`
  display: flex;
  width:100% !important;
  text-align: center;
  margin-top: 45pt;
  padding-left:15px;
  padding-right:15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 38px;
  letter-spacing: 0.0025em;
  color: #000000;
`;

export const SDivLB02 = styled.div`
  display: flex;
  width:100% !important;
  margin-top: 10pt;
  padding-left:15px;
  padding-right:15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 136.69%;
  letter-spacing: 0.01em;
  color: #000000;
`;

export const SDivLB03 = styled.div`
  display: flex;
  width:100% !important;
  margin-top: 60pt;
  padding-left:20px;
  padding-right:20px;
  padding-bottom:20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.005em;
  color: #B0B0B0;
`;
export const SDivSearch = styled.div`
  display: flex;
  justify-content: center;
  width:100% !important;
  text-align: center;
  margin-top: 20pt;
  padding-left:15px;
  padding-right:15px;
`;
export const DoNotData = () => {
  return (
    <>
      <SDivImg>
        <img
          src={require("components/assets/img/puzzle.png").default}
          alt="Gobernanzza"
        />
      </SDivImg>
      <SDivLB03>Aquí podrás ver una lista con acceso a su formación general para que puedas estar seguro de que es la cooperativa que buscas.</SDivLB03>
    </>
  )
}
const SDivImg = styled.div`
  display: flex;
  justify-content: center;
  width:100% !important;
  text-align: center;
  margin-top: 50pt;
  img{
    margin:auto;
    height: auto;
    width: 90%;
    margin: 0;
    border: 0;
  }
`;

export const SDivCooperativeList = () => {
  return (
    <>
   
      <SDivCooperativeItem className="mt-40">
        <Col xs={3} sm={3} md={2} lg={2} xl={2}>
        <img
          src={require("components/assets/img/blockchainfue.png").default}
          alt="Gobernanzza"
        />
        </Col>
        <Col xs={9} sm={9} md={10} lg={10} xl={10}>
            <Link to="buscador-de-coop3" className="content">
               <h3>BLOCKCHAINFUE, COOP.V.</h3>
              <span>Bloque Colegio Mayor Universidad de Alicante, S/N, Campus San Vicente del Raspeig, 03690, San Vicente del Raspeig (Alicante)</span>
            </Link>
        </Col>    
      </SDivCooperativeItem>
     
      <SDivCooperativeItem>
        <Col xs={3} sm={3} md={2} lg={2} xl={2}>
        <img
          src={require("components/assets/img/avante.png").default}
          alt="Gobernanzza"
        />
        </Col>
        <Col xs={9} sm={9} md={10} lg={10} xl={10}>
            <h3>Avante S.coop.and</h3>
            <span>Calle Esteban Salazar Chapela 11, 1º,29004 Málaga</span>
        </Col>    
      </SDivCooperativeItem>
      <SDivCooperativeItem>
        <Col xs={3} sm={3} md={2} lg={2} xl={2}>
        <img
          src={require("components/assets/img/eco-export.png").default}
          alt="Gobernanzza"
        />
        </Col>
        <Col xs={9} sm={9} md={10} lg={10} xl={10}>
            <h3>Eco Export S.Coop.and</h3>
            <span>Calle Arquitecto Eduardo Esteve, 12 , 2-6, 29017 Málaga</span>
        </Col>    
      </SDivCooperativeItem>
      <SDivCooperativeItem>
        <Col xs={3} sm={3} md={2} lg={2} xl={2}>
        <img
          src={require("components/assets/img/cooperativism-andaluz.png").default}
          alt="Gobernanzza"
        />
        </Col>
        <Col xs={9} sm={9} md={10} lg={10} xl={10}>
            <h3>Nombre Cooperativa</h3>
            <span>Dirección social de la Cooperativa mostrada en este espacio</span>
        </Col>    
      </SDivCooperativeItem>
    </>
  )
}

const SDivCooperativeItem = styled.div`
  display: flex;
  width:100% !important;
  padding-left:15px;
  padding-right:15px;
  padding-top:15px;
  padding-bottom:15px;
  border-bottom: rgba(0, 0, 0, 0.3) solid 2px;
  
  img{
    width: 70px;
    height: auto;
    top: 0px;
    left: 0px;
    margin-right:15px;
  }
  h3{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
    margin-bottom: -1px;
    }
  span{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    color: #000000;
  }
  &:hover {
    background:rgba(232, 112, 58, 0.2);
  }
  a:hover,a:active{
      text-decoration: none !important;
  }
`;