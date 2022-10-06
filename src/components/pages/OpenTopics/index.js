import React from "react";
import BaseLayout from "components/layout/BaseLayout";
import {SDivLogo,SDivLB01,SDivMainTopic,SDivOptionsRow,SDivSubTopicContainer,SDivSubTopic,SDivBtn} from "./customstyled"
import Menu from "components/layout/Menu";
import { SBtnGrey } from "components/styled-components/components";
import { useHistory } from "react-router-dom";
import { reverseURL } from "components/app/Router/utils";

function OpenTopics(props) {
  const history = useHistory();
  const onClickBtn = (value) => {
    history.push(reverseURL({ name: "debateitems" }));
    };
  return (
    <>
      <BaseLayout>
        <Menu  title="Temas" />
    <SDivLogo>
        <img
            src={require("components/assets/img/topics.svg").default}
            alt="Gobernanzza"
          />
      </SDivLogo>
      <SDivLB01>Fecha de cierre para debate:<br/><b>27/05/2021</b></SDivLB01>
      <SDivMainTopic>
              <h3>Temas a tratar en el próximo Consejo Rector</h3>
              <span>@Admin<br/>14/05/2021</span>
              <p>“He abierto este debate para que podamos exponer en común los temas a tratar en el próximo Consejo Rector”</p>
              <SDivOptionsRow><i className="icon-like"/><span className="mr-15">25</span><i className="icon-unlike"/><span>09</span>
                  <div><span className={"view"}>(2) Ver respuestas</span><span className={"answer ml-15"}>Responder</span></div>
              </SDivOptionsRow>
      </SDivMainTopic>
      <SDivSubTopicContainer>
            <SDivSubTopic>
              <h3>Incorporación de nuevos socios</h3>
              <span>@Admin<br/>14/05/2021</span>
              <p>Debido a que nos han llegado varias solicitudes, debemos analizarlas y ponerlas en común</p>
              <p>Una vez analizado el informe que hemos recibido creo que estas nuevas incorporaciones se adaptan a la filosofía y el objetivo de la Cooperativa</p>
              <SDivOptionsRow><i className="icon-like"/><span className="mr-15">25</span><i className="icon-unlike"/><span>09</span>
                  <div><span className={"view-disabled"}>Ver respuestas</span><span className={"answer ml-15"}>Responder</span></div>
              </SDivOptionsRow>
           </SDivSubTopic>
           <SDivSubTopic>
              <h3>Proveedor de servidores</h3>
              <span>@Admin<br/>14/05/2021</span>
              <p>creo que es mejor tener varios servidores virtuales para asegurarnos su funcionamiento continuado.</p>
              <SDivOptionsRow><i className="icon-like"/><span className="mr-15">25</span><i className="icon-unlike"/><span>09</span>
                  <div><span className={"view-disabled"}>Ver respuestas</span><span className={"answer ml-15"}>Responder</span></div>
              </SDivOptionsRow>
           </SDivSubTopic>
      </SDivSubTopicContainer>
      <SDivBtn>
              <SBtnGrey onClick={onClickBtn}>
                           <span>Volver</span> </SBtnGrey>
      </SDivBtn>
      </BaseLayout>
    </>
  );
}
export default OpenTopics;