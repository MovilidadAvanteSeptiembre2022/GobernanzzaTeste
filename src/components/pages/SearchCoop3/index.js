import React from "react";
import BaseLayout from "components/layout/BaseLayout";
import {SDivCooperative,SDivParagraph,SDivAnnouncement,SDivBtn} from "./customstyled"
import {Col} from 'react-bootstrap'
import { SBtnPrimary } from "components/styled-components/components";
import { reverseURL } from "components/app/Router/utils";
import { useHistory } from "react-router-dom";
import Menu from "components/layout/Menu";
function SearchCoop3(props) {
  const history = useHistory();
  const onClickBtn = () => {
       history.push(reverseURL({ name: "jointocoop" }));
 
  };
   return (
    <>
      <BaseLayout>
        <Menu title="Buscar" />
   
      <SDivCooperative>
        <Col xs={8} sm={8} md={9} lg={9} xl={9}>
          <h3>BLOCKCHAINFUE, COOP.V.</h3>
          </Col>
          <Col xs={4} sm={4} md={3} lg={3} xl={3}>
              <div className={"registerlabel"}>Registrada</div>
          </Col>   
      </SDivCooperative> 
      <SDivParagraph>
        <h3>Domicilio social</h3>
        <p>Bloque Colegio Mayor Universidad de Alicante, S/N, Campus San Vicente del Raspeig, 03690, San Vicente del Raspeig (Alicante)</p>
      </SDivParagraph>
      <SDivParagraph>
        <h3>CIF</h3>
        <p>F42703223</p>
      </SDivParagraph>
      <SDivParagraph>
        <h3>Objeto social</h3>
        <p> Fomentar la investigación básica y aplicada, la difusión y transferencia del conocimiento de la Tecnología Blockchain.</p>
      </SDivParagraph>
      <SDivParagraph>
        <h3>Forma jurídica</h3>
        <p>Sociedad Cooperativa</p>
      </SDivParagraph>
      <SDivParagraph>
        <h3>Actividad</h3>
        <p>Aplicación práctica de la tecnología Blockchain utilizando la red pública “BlockchainFUE”</p>
      </SDivParagraph>
      <SDivParagraph>
        <h3>Actividad CNAE</h3>
        <p>8299 otras actividades de apoyo a las empresas n.c.o.p.</p>
      </SDivParagraph>
      <SDivParagraph>
        <h3>Grupo Sector</h3>
        <p>Nuevas Tecnologías</p>
      </SDivParagraph>
      <SDivAnnouncement>
        <div></div>
          <span>Próxima fecha del Órgano de Admisión: </span>
          <h3>23 de Julio, 2021</h3>           
        </SDivAnnouncement>
        <SDivBtn>
              <SBtnPrimary onClick={onClickBtn}>
                           <span>Unirme a esta cooperativa</span> </SBtnPrimary>
        </SDivBtn> 
      </BaseLayout>
    </>
  );
}
export default SearchCoop3;