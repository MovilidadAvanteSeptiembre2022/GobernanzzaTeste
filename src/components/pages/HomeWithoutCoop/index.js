import React from "react";
import BaseLayout from "components/layout/BaseLayout";
import {SDivLogo,SDivLB01,SDivLB02,SDivLB03,SDivLB04,FooterBox} from "./customstyled"
import { MainContainer,WorkArea } from "components/styled-components/components";
import {Col} from 'react-bootstrap'
import Menu from "components/layout/Menu";
import { reverseURL } from "components/app/Router/utils";
import { useHistory } from "react-router-dom";
function HomeWithoutCoop(props) {
  const history = useHistory();
  const onClickBtn = () => {
       history.push(reverseURL({ name: "searchcoop" }));
 
  };
  return (
    <>
      <BaseLayout>
        <Menu title="Inicio" search={true}/>
    <SDivLogo>
        <img
            src={require("components/assets/img/gobernanzza_log.svg").default}
            alt="Gobernanzza"
          />
      </SDivLogo>
      <SDivLB01>Bienvenido<b>Usuario</b></SDivLB01>
      <SDivLB02>A continuación puedes ver un resumen detallado de la/s cooperativa/s de las que formas parte</SDivLB02>
      <SDivLB03>Tus Cooperativas</SDivLB03>
      <SDivLB04>Aún no participas en ninguna cooperativa.</SDivLB04>
      <FooterBox >
        <MainContainer>
          <WorkArea > 
          <Col xs={12} sm={12} md={7} lg={6} xl={5} >
          <img
                    src={require("components/assets/img/img_crear.svg").default}
                  alt="Gobernanzza"
                />
                <i className="icon-add"  onClick={onClickBtn}></i>
          </Col>
        </WorkArea>
        </MainContainer>
      </FooterBox>
      </BaseLayout>
    </>
  );
}
export default HomeWithoutCoop;