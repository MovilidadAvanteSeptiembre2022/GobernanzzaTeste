import React,{useState} from "react";
import BaseLayout from "components/layout/BaseLayout";
import {SDivCooperativeItem,
        SDivBadges,
        SDivInformation,
        SDivRow,
        SDivColLeft,
        SDivColRight,
        SDivAnnouncementBtn,
        SDivAnnouncement,
        SDivGrid,
        SDivOption,
        SDivBtnHome} from "./customstyled"
import {Accordion,Col} from 'react-bootstrap'
import { SBtnPrimarySm,SBtnSecundary } from "components/styled-components/components";
import { useHistory } from "react-router-dom";
import { reverseURL } from "components/app/Router/utils";
import Menu from "components/layout/Menu";

function Cooperative(props) {
  const [meetings, setMeetings] = useState(true);
  const history = useHistory();
  const onClickBtn = (value) => {
     if (value==='Reuniones'){
      setMeetings(true)
    }
    else{
      setMeetings(false)
    }
    };
    const onClickOption = (value) => {
      history.push(reverseURL({ name: value }));
    };
  return (
    <>
      <BaseLayout>
        <Menu title="Cooperativa" />
    <SDivCooperativeItem>
        <Col xs={3} sm={3} md={2} lg={2} xl={2}>
        <img
          src={require("components/assets/img/blockchainfue.png").default}
          alt="Gobernanzza"
        />
        </Col>
        <Col xs={9} sm={9} md={10} lg={10} xl={10}>
              <h3>BLOCKCHAINFUE, COOP.V.</h3>
              <span>Fintech</span>
              <SDivBadges>Miembro</SDivBadges>
        </Col>    
      </SDivCooperativeItem>
      <SDivRow >
      <Accordion  flush>
         <Accordion.Item eventKey="0">
                <Accordion.Header >
                <i className="icon-information" /> Información general
                </Accordion.Header>
                <Accordion.Body >
                    <SDivInformation>
                      <div>
                          <h3>Domicilio social</h3>
                          <span>Bloque Colegio Mayor Universidad de Alicante, S/N, Campus San Vicente del Raspeig, 03690, San Vicente del Raspeig (Alicante)</span>
                      </div>    
                    </SDivInformation>
                    <SDivInformation>
                        <SDivColLeft>
                          <div>
                             <h3>CIF</h3>
                              <span>F42703223</span>
                          </div>
                        </SDivColLeft>
                        <SDivColRight>
                          <div>
                              <h3>Objeto social</h3>
                              <span>Fomentar la investigación básica y aplicada, la difusión y transferencia del conocimiento de la Tecnología Blockchain.</span>
                          </div>
                        </SDivColRight>
                    </SDivInformation>
                    <SDivInformation>
                        <SDivColLeft>
                          <div>
                             <h3>Actividad CNAE</h3>
                              <span> 8299 otras actividades de apoyo a las empresas n.c.o.p.</span>
                          </div>
                        </SDivColLeft>
                        <SDivColRight>
                          <div>
                              <h3>Actividad</h3>
                              <span>Aplicación práctica de la tecnología Blockchain utilizando la red pública “BlockchainFUE”</span>
                          </div>
                        </SDivColRight>
                    </SDivInformation>
                    <SDivInformation>
                        <SDivColLeft>
                          <div>
                             <h3>Forma jurídica</h3>
                              <span>Sociedad Cooperativa</span>
                          </div>
                        </SDivColLeft>
                        <SDivColRight>
                          <div>
                              <h3>Grupo sector</h3>
                              <span>Nuevas Tecnologías</span>
                          </div>
                        </SDivColRight>
                    </SDivInformation>
                </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="1">
                <Accordion.Header >
                <i className="icon-announcement" /> Tablón de anuncios
                </Accordion.Header>
                <Accordion.Body >
                    <SDivAnnouncementBtn>
                     <SDivColLeft>
                          <SBtnPrimarySm onClick={() => {onClickBtn('Reuniones')}} className={(meetings===true?"":"inactive")}>
                             <span>Reuniones</span> 
                          </SBtnPrimarySm>
                     </SDivColLeft>
                     <SDivColRight>
                          <SBtnPrimarySm onClick={() => {onClickBtn('Asambleas')}} className={(meetings===true?"inactive":"")}>
                             <span>Asambleas</span> 
                          </SBtnPrimarySm>
                     </SDivColRight>
                    </SDivAnnouncementBtn>
                    <SDivAnnouncement className={(meetings===true?"":"invisible")}>
                      <div>
                        <h3>Reunión de Consejo Rector</h3>
                        <span>Martes, 18 de Mayo, 2021  -  20:00 h. <br/>
                        <a href="/pantalla-principal-miembro">+ VER DETALLES</a></span>
                      </div>
                      <div>
                        <h3>Reunión de Órgano de Admisión</h3>
                        <span>Martes, 18 de Mayo, 2021 - 20:00 h. <br/>
                        <a href="/pantalla-principal-miembro">+ VER DETALLES</a></span>
                      </div>
                    </SDivAnnouncement>
                    <SDivAnnouncement className={(meetings===true?"invisible":"")}>
                      <div>
                        <h3>Asamblea de consitución de cooperativa</h3>
                        <span>Martes, 18 de Mayo, 2021  -  20:00 h. <br/>
                        <a href="/pantalla-principal-miembro">+ VER DETALLES</a></span>
                      </div>
                      <div>
                        <h3>Nombre de Asamblea</h3>
                        <span>Martes, 18 de Mayo, 2021 - 20:00 h. <br/>
                        <a href="/pantalla-principal-miembro">+ VER DETALLES</a></span>
                      </div>
                    </SDivAnnouncement>
                </Accordion.Body>
         </Accordion.Item>
      </Accordion>
      </SDivRow>
      <SDivGrid>
          <SDivOption>
              <img
                  src={require("components/assets/img/icon_register.svg").default}
                alt="Registro"
              />
              <span>REGISTRO</span>
          </SDivOption>
          <SDivOption>
              <img
                  src={require("components/assets/img/icon_documentation.svg").default}
                alt="Documentación"
              />
              <span>DOCUMENTACIÓN</span>
          </SDivOption>
          <SDivOption>
              <img
                  src={require("components/assets/img/icon_social_books.svg").default}
                alt="Libros Sociales"
              />
              <span>LIBROS SOCIALES</span>
          </SDivOption>
          <SDivOption>
              <img
                  src={require("components/assets/img/icon_council.svg").default}
                alt="Consejo Rector"
              />
              <span>CONSEJO RECTOR</span>
          </SDivOption>
          <SDivOption>
              <img
                  src={require("components/assets/img/icon_assembly.svg").default}
                alt="Asamblea"
              />
              <span>ASAMBLEA</span>
          </SDivOption>
          <SDivOption onClick={() => {onClickOption('debate')}}>
              <img
                  src={require("components/assets/img/icon_debate.svg").default}
                alt="Debate"
              />
              <span>DEBATE</span>
          </SDivOption>
          <SDivOption onClick={() => {onClickOption('voting')}}>
              <img
                  src={require("components/assets/img/icon_voting.svg").default}
                alt="Votaciones"
              />
              <span>VOTACIONES</span>
          </SDivOption>
          <SDivOption>
              <img
                  src={require("components/assets/img/icon_members.svg").default}
                alt="Miembros"
              />
              <span>MIEMBROS</span>
          </SDivOption>
          <SDivOption>
              <img
                  src={require("components/assets/img/icon_topics.svg").default}
                alt="Temas"
              />
              <span>TEMAS</span>
          </SDivOption>
      </SDivGrid>
      <SDivBtnHome>
        <div>
            <SBtnSecundary>
                <span>Volver a Inicio</span> 
             </SBtnSecundary>
        </div>
      </SDivBtnHome> 
      </BaseLayout>
    </>
  );
}
export default Cooperative;