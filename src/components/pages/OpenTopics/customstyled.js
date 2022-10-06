import styled from "styled-components";


export const SDivLogo = styled.div`
  display: flex;
  justify-content: center;
  width:100% !important;
  text-align: center;
  margin-top: 30pt;
  img{
    margin:auto;
    height: auto;
    width: 35%;
    margin: 0;
    border: 0;
  }
`;
export const SDivLB01 = styled.div`
  width:100% !important;
  margin-top:20pt;
  padding-left:15px;
  padding-right:15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: #000000;
  text-align:center;
  b{
    font-size: 16px;    
  }

`;
export const SDivMainTopic = styled.div`
  width:100% !important;
  margin-top:20pt;
  padding-left:15pt;
  padding-right:15pt;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  color: #000000;
  h3{
      font-size: 24px;
      line-height: 20px;
      letter-spacing: 0.0025em;
  }
  span{
      font-size: 13px;
  }
  p{
    margin-top:10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.01em;    
  }
`;
export const SDivSubTopicContainer = styled.div`
    margin-left:25px;
    border-left: rgba(0, 0, 0, 0.3) solid 1px;
`;
export const SDivSubTopic = styled.div`
  width:100% !important;
  margin-top:20pt;
  padding-left:15pt;
  padding-right:15pt;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  color: #000000;
  h3{
      font-size: 18px;
      line-height: 20px;
      letter-spacing: 0.0025em;
  }
  span{
      font-size: 13px;
  }
  p{
    margin-top:10px;
    font-size: 12px;
    line-height: 19px;
    letter-spacing: 0.01em;    
  }
`;


export const SDivOptionsRow = styled.div`
  width:100% !important;
  margin-top:10pt;
  i{
    font-size:25px;
    vertical-align: middle;
  }
  span{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;
        color: #000000;
        &.answer{
          color: #E8703A !important;
          cursor:pointer;
        }
        &.view{
          text-decoration-line: underline !important;
          color: #F48C06 !important;
          cursor:pointer;
        }
        &.view-disabled{        
          color: #B0B0B0 !important;
          cursor:none;
        }
        &.mr-15{
            margin-right:15px;
        }
        &.ml-15{
          margin-left:15px;
      }
  }
  div{
    display:inline-block;
    float:right;
  }
`;
export const SDivBtn = styled.div`
  width:100% !important;
  padding-left:15px;
  padding-right:15px;
  margin-top:50px;
`;