import React from "react";
import BaseLayout from "components/layout/BaseLayout"
import {SDivLogo,SDivLoading,SDivLB01,SDivLB02,SDivBtn} from "./customstyled"
import { SBtnPrimary } from "components/styled-components/components";
import { reverseURL } from "components/app/Router/utils";
import { useHistory } from "react-router-dom";
function JoinToCoop(props) {
  
  const history = useHistory();
  const onClickBtn = () => {
       history.push(reverseURL({ name: "cooperative" }));
 
  };
  return (
    <>
      <BaseLayout>
      <SDivLogo>
        <img
            src={require("components/assets/img/gobernanzza_log.svg").default}
            alt="VacunApp"
          />
      </SDivLogo>
      <SDivLoading>
        <img
            src={require("components/assets/img/check.svg").default}
            alt="VacunApp"
          />
      </SDivLoading>
     
      <SDivLB01>Hemos solicitado tu unión a esta cooperativa</SDivLB01>
      <SDivLB02>Texto descriptivo</SDivLB02>
      <SDivBtn>
              <SBtnPrimary onClick={onClickBtn}>
                           <span>Aceptar</span> </SBtnPrimary>
      </SDivBtn>
      </BaseLayout>
    </>
  );
}
export default JoinToCoop;
