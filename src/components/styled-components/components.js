import styled from "styled-components";


export const MainContainer = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;   
  padding-left: 0 !important;
  padding-right: 0 !important;
  @media (min-width: 415px) {
    max-width: 99%;
  }
  @media (min-width: 576px) {
      max-width: 540px;
  }
  @media (min-width: 768px) {
      max-width: 720px;
  }
  @media (min-width: 992px) {
      max-width: 960px;
  }
  @media (min-width: 1200px){
      max-width: 1140px;
  }
  @media (min-width: 1400px){
      max-width: 1320px;
  }
`;

export const WorkArea = styled.div`
  with:100%
  --bs-gutter-x: 0.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) * -.5);
  margin-left: calc(var(--bs-gutter-x) * -.5);
  justify-content: center!important;
`;

export const ContainerArea = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  width: 99%;
  min-height:600px;
  padding-left: 20px !important;
  padding-right: 20px !important;
  margin-top:10pt;
  margin-left:1%;
  position: relative;
`;

export const SInputText = styled.input`
    width: 100%;
    border: 0.5px solid #9BA2B0;
    box-sizing: border-box;
    border-radius: 5px;
    color:#3b3b3b ;
    padding-left: 15pt;
    padding-top: 13pt;
    padding-bottom: 13pt;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.004em;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #F2753F;
        border: 0.5px solid #F2753F;
    }
    &::placeholder {
      color: #9BA2B0;
    }
`;
export const SErrorLabel = styled.p`
    font-Family: "Montserrat";
    font-Size: 8pt;
    font-Weight: 500;
    font-Style: normal;
    color: #cb3c3c;
    margin-top:5pt;
`;

export const SBtnPrimary = styled.button`
    width: 100%;
    border-radius: 5pt;
    border-style: solid;
    border-color: #F2753F;
    background-color: #F2753F;
    padding-top: 10pt;
    padding-bottom: 10pt;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.0125em;
    color: #FFFFFF;
    :disabled {
      opacity: 0.4;
    }
    &:hover:enabled {
     color:#F2753F;
     background-color: #FFF;
    }
    span{
      vertical-align: middle;
    }
`;

export const SBtnSecundary = styled.button`
    width: 100%;
    border: 1px solid #B0B0B0;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.0125em;
    color: #B0B0B0;
    background:#FFFFFF;
    padding-top: 10pt;
    padding-bottom: 10pt;
    :disabled {
      opacity: 0.4;
    }
    &:hover:enabled {
     color:#F2753F;
     background-color: #FFF;
    }
    span{
      vertical-align: middle;
    }
`;

export const SBtnGrey = styled.button`
    width: 100%;
    border: 1px solid #B0B0B0;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.0125em;
    color: #FFFFFF;
    background:#B0B0B0;
    padding-top: 10pt;
    padding-bottom: 10pt;
    :disabled {
      opacity: 0.4;
    }
    &:hover:enabled {
     color:#B0B0B0;
     background-color: #FFF;
    }
    span{
      vertical-align: middle;
    }
`;

export const SBtnPrimarySm = styled.button`
    width: 95%;
    border-radius: 10pt;
    border-style: solid;
    padding-top: 3pt;
    padding-bottom: 3pt;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.01em;
    border-color: #F2753F;
    background-color: #F2753F;
    color: #FFFFFF;
    &.inactive{
      border-color: #F6F6F6;
      background-color: #F6F6F6;
      color: #000000;
    }
    :disabled {
      opacity: 0.4;
    }
    &:hover:enabled {
     color:#F2753F !important;
     background-color: #FFF;
    }
    span{
      vertical-align: middle;
    }
`;

export const SLoading = styled.div`
    color: #fff !important;
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: middle;
    padding-right:5pt;
    margin-right:5pt;
    border: .25em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: .75s linear infinite spinner-border;
    `;

   export const SBtnDangerSm = styled.button`
    width: 100%;
    border-style: solid;
    padding-top: 3pt;
    padding-bottom: 3pt;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.01em;
    border-color: #F9CEC0;
    background: #F9CEC0;
    border-radius: 5px;
    color: #E8703A !important;
    &.inactive{
      opacity: 0.4;
    }
    :disabled {
      opacity: 0.4;
    }
    &:hover:enabled {
     color:#E8703A;
     background-color: #FFF;
    }
    span{
      vertical-align: middle;
      color: #E8703A !important;
    }
`;

export const SBtnSpecialSm = styled.button`
    width: 100%;
    border-style: solid;
    padding-top: 3pt;
    padding-bottom: 3pt;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.01em;
    border-color: #F48C06;
    background: #F48C06;
    border-radius: 5px;
    color: #FFFFFF;
    &.inactive{
      opacity: 0.4;
    }
    :disabled {
      opacity: 0.4;
    }
    &:hover:enabled {
     color:#F48C06 !important;
     background-color: #FFF;
    }
    &:hover:enabled span {
      color:#F48C06 !important;
      
     }
    span{
      vertical-align: middle;
      color: #FFffFF !important;
    }
`;
export const SBtnSpecial2Sm = styled.button`
    width: 100%;
    border-style: solid;
    padding-top: 3pt;
    padding-bottom: 3pt;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.01em;
    border-color: #F7F7F7;
    background: #F7F7F7;
    border-radius: 5px;
    color: #000000 !important;
    &.inactive{
      opacity: 0.4;
    }
    :disabled {
      opacity: 0.4;
    }
    &:hover:enabled {
     color:#F7F7F7;
     background-color: #FFF;
    }
    span{
      vertical-align: middle;
      color: #000000 !important;
    }
`;
