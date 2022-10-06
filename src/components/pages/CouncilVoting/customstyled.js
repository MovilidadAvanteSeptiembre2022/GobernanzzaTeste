import styled from "styled-components";


export const SDivLB01 = styled.div`
  width:100% !important;
  margin-top:20pt;
  padding-left:10pt;
  padding-right:10pt;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  color: #000000;

  h3{
      font-size: 24px;
      line-height: 38px;
      letter-spacing: 0.0025em;
      
  }
  p{
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.01em;
  }
`;


export const SDivRow = styled.div`
  width:100% !important;
  padding-left:15px;
  padding-right:15px;
  label{
    width:100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.004em;
    color: #000000;
    margin-bottom:10px;
    margin-top:10px;
  }
  input{
    margin-top:10px;
  }
`;
export const SDivBtn = styled.div`
  width:100% !important;
  margin-bottom:25px;
  padding-left:15px;
  padding-right:15px;
  text-align:center;
`;

export const SDivBtnBottom = styled.div`
  position:relative;
  display:flexible;
  width:100%;
  margin-bottom:25px;
  padding-left:15px;
  padding-right:15px;
  text-align:center;
  margin-top:100px;
  bottom:0;
`;

export const SBtn = styled.button`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.01em;
    border-style: solid;
    border-color: #F7F7F7;
    background: #F7F7F7;
    border-radius: 5px;
    color: #000000;
    padding: 8pt 20pt;
    margin-left:5px;
    margin-right:5px;
    
    &.active{
      background: #D9EED5;
      color:#276D1A;
    }
    :disabled {
      opacity: 0.4;
    }
   
    span{
      vertical-align: middle;
    }
`;