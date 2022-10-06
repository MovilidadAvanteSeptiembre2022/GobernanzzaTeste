import React,{useState} from "react";
import BaseLayout from "components/layout/BaseLayout";
import {SDivLB01,SDivBtn,SDivRow,SDivBtnBottom,SBtn} from "./customstyled"
import Menu from "components/layout/Menu";
import { reverseURL } from "components/app/Router/utils";
import { useHistory } from "react-router-dom";
import { SBtnPrimary,SInputText } from "components/styled-components/components";


function CouncilVoting(props) {
  const history = useHistory();
  const [value, setValue] = useState("Y");
  const onClickBtn = () => {
       history.push(reverseURL({ name: "confirmation" }));
 
  };
  const onClickBtnVoting = (value) => {
    setValue(value)
};
  return (
    <>
      <BaseLayout>
        <Menu  title="Votaciones" search={true}/>
   
      <SDivLB01><h3>Votación Consejo</h3>
      <p>Vas a proponer un tema para una votación, a continuación debes introducir los siguiente datos:</p>
      </SDivLB01>
      <SDivBtn>
        <SBtn className={(value==="Y")?"active":""} onClick={() => {onClickBtnVoting("Y")}}><span>SI</span></SBtn>
        <SBtn className={(value==="N")?"active":""} onClick={() => {onClickBtnVoting("N")}}><span>NO</span></SBtn>
        <SBtn className={(value==="A")?"active":""} onClick={() => {onClickBtnVoting("A")}}><span>ABSTENERSE</span></SBtn>
      </SDivBtn>
      <SDivRow>
          <label>Voto número 1
            <SInputText
                      type="voting1"
                      placeholder="Nombre miembro"
                      />
          </label>
      </SDivRow>
      <SDivRow>
          <label>Voto número 2
            <SInputText
                      type="voting2"
                      placeholder="Nombre miembro"
                      />
          </label>
      </SDivRow>
      <SDivRow>
          <label>Voto número 2
            <SInputText
                      type="voting2"
                      placeholder="Nombre miembro"
                      />
          </label>
      </SDivRow>
      <SDivBtnBottom>
              <SBtnPrimary onClick={onClickBtn}>
                           <span>Enviar mi voto</span> </SBtnPrimary>
      </SDivBtnBottom>
      </BaseLayout>
    </>
  );
}
export default CouncilVoting;