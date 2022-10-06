import styled from "styled-components";

export const SDivVoting = styled.div`
  width:100% !important;
  padding-left:15px;
  padding-right:15px;
  padding-top:15px;
  padding-bottom:15px; 
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  h3{
    font-size: 24px;
    line-height: 38px;
    letter-spacing: 0.0025em;
    color: #000000;
    margin-bottom:10px;
    }
  span{
    display:block;
    font-size: 14px;
    line-height:19px;
    letter-spacing: 0.01em;
    color: #000000;    
  }
`;


export const SDivColLeft= styled.div`
   flex: 1 0;
   with:50%;
    `;
   export const SDivColRight= styled.div`
   flex: 1 0;
   with:50%;   
   `;

export const SDivRowBtn = styled.div`
  display:flex;
  width:100% !important;
  padding-left:15px;
  padding-right:15px;
  margin-bottom:10px;
  
`;
export const SDivVotingList = styled.div`
  width:100% !important;
  margin-bottom:10px;
  &.invisible{
      display:none !important;
  }
`;
export const SDivVotingItem = styled.div`
  width:100% !important;
  padding-top:25px;
  padding-bottom:15px;
  padding-left:10px;
  padding-right:10px;
  margin-right: 0;
  margin-left:0;
  border-bottom: rgba(0, 0, 0, 0.3) 1px solid;
  family: Roboto;
  font-style: normal;
  h3{
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
    margin-bottom:6px;
    width:70%;
    }
  span{
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    color: #000000;
    }
`;
export const SDivBadges = styled.div`
    position:relative;
    float: right;
    top:0;
    display:inline-block;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 10pt !important;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.01em;
    border-radius: 5px;
    padding:1pt 10pt;
    color: ${props => props.green ? "#276D1A" : (props => props.yellow?"#9E8117":"#B91D1D")} !important;
    background: ${props => props.green ? "#D9EED5" : (props => props.yellow?"#FFEFB5":"#FFB5B5")} ;
`;


export const SDivBtnView = styled.div`
    width:100px;
    position:relative;
    float: right;
    top:-10px;
`;

export const FooterBox = styled.div`
  position: fixed;
  display:flex;
  z-index: 1000;
  bottom: 0;
  left: 0px !important;
  right: 0px !important;
  padding-bottom:10px;
  padding-right:15px;
  vertical-align:bottom !important;
`;

export const SDivLeft = styled.div`
  float:left;
  position: absolute;
  bottom: 0px;
  padding-bottom:5px;
  margin-left:10px;
  i{
    font-size:40px;
    color:#B0B0B0;
    cursor:pointer;
  }
`;
export const SDivRight = styled.div`
  float:right;
  text-align:right !important;
  i{
    font-size:40px;
    color:#F48C06;
    vertical-align:middle !important;
    cursor:pointer;
  }
  div{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 10px;
        line-height: 38px;
        text-align: right;
        letter-spacing: 0.0025em;
        color: #000000;
        margin-bottom:15px;
        span{
          vertical-align:middle !important;
          padding-right:10px;        
        }
  }
`;
