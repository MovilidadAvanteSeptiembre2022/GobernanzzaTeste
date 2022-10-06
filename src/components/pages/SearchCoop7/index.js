import React from "react";
import BaseLayout from "components/layout/BaseLayout"
import {SDivLogo,SDivCheck,SDivLB01,SDivLB02,SDivBtn} from "./customstyled"
import { SBtnPrimary } from "components/styled-components/components";
import { reverseURL } from "components/app/Router/utils";
import { useHistory } from "react-router-dom";
function SearchCoop7(props) {
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
      <SDivCheck>
        <img
            src={require("components/assets/img/check.svg").default}
            alt="VacunApp"
          />
      </SDivCheck>
     
      <SDivLB01>Acta de Consejo Rector firmada con éxito</SDivLB01>
      <SDivLB02>Texto descriptivo</SDivLB02>
      <SDivBtn>
              <SBtnPrimary onClick={onClickBtn}>
                           <span>Aceptar</span> </SBtnPrimary>
      </SDivBtn>
      </BaseLayout>
    </>
  );
}
export default SearchCoop7;
