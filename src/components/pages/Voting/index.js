import React from "react";
import BaseLayout from "components/layout/BaseLayout";
import {SDivLogo,SDivLB01,SDivLB02,SDivBtn} from "./customstyled"
import Menu from "components/layout/Menu";
import { reverseURL } from "components/app/Router/utils";
import { useHistory } from "react-router-dom";
import { SBtnPrimary } from "components/styled-components/components";


function Voting(props) {
  const history = useHistory();
  const onClickBtn = () => {
       history.push(reverseURL({ name: "votingitems" }));
 
  };
  return (
    <>
      <BaseLayout>
        <Menu  title="Votaciones" search={true}/>
    <SDivLogo>
        <img
            src={require("components/assets/img/icon_voting.svg").default}
            alt="Gobernanzza"
          />
      </SDivLogo>
      <SDivLB01><h3>Vota y dá tu opinión</h3>
      <p>Para poder ejercer tu derecho al voto en tu cooperativa es muy sencillo:</p>
      <p>1 Puedes ver un listado con las votaciones abiertas y finalizadas, selecciona “abiertas”</p>
      <p>2) Clica en “ver votación” para observas los detalles actualizados de la votacición</p>
      <p>3) Ejerce tu derecho al voto clicando en “si”, “no” o “abtenerse” y conocerá tu voto automaticamente</p>
      </SDivLB01>
      <SDivLB02>
      <label>
          <input
            name="dontshow"
            type="checkbox"
           />
           No volver a ver esta pantalla
        </label>
      </SDivLB02>
      <SDivBtn>
              <SBtnPrimary onClick={onClickBtn}>
                           <span>Continuar</span> </SBtnPrimary>
      </SDivBtn>
      </BaseLayout>
    </>
  );
}
export default Voting;