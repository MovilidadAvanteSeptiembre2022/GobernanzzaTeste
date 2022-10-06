import styled from "styled-components";

export const SDivBtnBottom = styled.div`
  position:relative;
  width:100% !important;
  margin-bottom:25px;
  padding-left:15px;
  padding-right:15px;
  text-align:center;
  padding-top:80pt;
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
    border: 1px solid #E8703A;
    box-sizing: border-box;
    background: #FFFFFF;
    border-radius: 5px;
    color: #E8703A;
    padding: 8pt 20pt;
    margin-left:5px;
    margin-right:5px;    
    :disabled {
      opacity: 0.4;
    }
   
    span{
      vertical-align: middle;
    }
    &:hover:enabled {
      color:#FFFFFF;
      background-color: #E8703A;
     }
`;

export const SDivLeft = styled.div`
  float:left;
  position: absolute;
  bottom: 10px;
  padding-bottom:5px;
  margin-left:10px;
  i{
    font-size:40px;
    color:#B0B0B0;
  }
`;
export const SDivRight = styled.div`
  float:right;
  position: absolute;
  bottom: 15px;
  right:10px;
  text-align:right !important;
`;

export const SDivRow = styled.div`
  display:flex;
  width:100%;
  padding-bottom:10pt;
  span{
      width:70%;
      position:relative;
      left:15px;
      top:18pt;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      letter-spacing: 0.0025em;
      color: #000000;      
  }
 
  div{
      postion:relative;
      width: 44px;
      height: 44px;
      margin-left:40px;
      margin-top:10pt;
      background: #F7F7F7;
      border-radius: 50%;
      display:inline-block;
      text-align:center;
      img{
          position:relative;
          top:8px;
      }
  }
`;

export const SDivPdf = styled.div`
  width:100%;
  height: 70VH;
  background:#F7F7F7;
  overflow-y: auto;
`;