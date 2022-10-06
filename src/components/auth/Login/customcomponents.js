import styled from "styled-components";
import { TextStyles, ButtonDef1 } from "components/styled-components/component";

export const LogoImg = styled.img`
  height: auto;
  width: 100%;
  margin: 0;
  border: 0;
`;
export const FormBox = styled.div`
  background-image: url(${require("components/pages/assets/img/login_bg.svg")
    .default});
  padding-bottom: 30pt;
  padding-left: 15pt;
  padding-right: 15pt;
`;

export const DescriptionText = styled.div`
  ${TextStyles};
  font-size: 7pt;
  font-weight: 500;
  color: #2d2e2e;
  text-align: center !important;
`;

export const TitleText = styled.div`
  ${TextStyles};
  font-size: 12pt;
  font-weight: bold;
  color: #202020;
  flex: 1 0;
  width: 100%;
`;
export const ButtonConnect = styled(ButtonDef1)`
  ${TextStyles};
  font-size: 10pt;
  font-weight: 600;
  color: #ffffff;
  
`;

export const ForgetText = styled.div`
  display: flex;
  a {
    ${TextStyles};
    font-size: 10pt;
    font-weight: 500;
    color: #202020;
    flex: 1 0;
    width: 100%;
    text-align: right;
    color: #01beb1;
  }
`;
export const TradeMarkText = styled.div`
  ${TextStyles};
  font-weight: 500;
  color: #959595;
  font-size: 8pt;
  text-align:center;
  margin-top:10px;
`;
