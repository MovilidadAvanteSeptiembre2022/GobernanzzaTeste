import React from "react";
import BaseLayout from "components/layout/BaseLayout";
import {SDivLogo,SDivLB01,SDivLB02,SDivBtn} from "./customstyled"
import Menu from "components/layout/Menu";
import { reverseURL } from "components/app/Router/utils";
import { useHistory } from "react-router-dom";
import { SBtnPrimary } from "components/styled-components/components";


function Debate(props) {
  const history = useHistory();
  const onClickBtn = () => {
       history.push(reverseURL({ name: "debateitems" }));
 
  };
  return (
    <>
      <BaseLayout>
        <Menu  title="Temas" />
    <SDivLogo>
        <img
            src={require("components/assets/img/icon_debate.svg").default}
            alt="Gobernanzza"
          />
      </SDivLogo>
      <SDivLB01><h3>Debates propuestos</h3>
      <p>La mejor forma de llegar a un acuerdo, es dando tu opinión, aquí puedes hacerlo:</p>
      <p>1 Puedes ver un listado con los debates abiertos y finalizados, selecciona “abiertos”</p>
      <p>2) Clica en “ver debate” para observar los detalles actualizados de los temas propuestos</p>
      <p>3) Da a conocer tu opinión en los debates clicando en “responder” o propón un tema nuevo utilizando “+”</p>
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
export default Debate;