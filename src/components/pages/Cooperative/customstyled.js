import styled from "styled-components";

export const SDivCooperativeItem = styled.div`
  display: flex;
  width:100% !important;
  padding-left:10px;
  padding-right:10px;
  padding-top:15px;
  padding-bottom:15px;  
  img{
    width: 70px;
    height: auto;
    top: 0px;
    left: 0px;
    margin-right:15px;
  }
  h3{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 38px;
    letter-spacing: 0.0025em;
    color: #000000;
    margin-bottom:-5px;
    }
  span{
    display:block;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 136.69%;
    letter-spacing: 0.01em;
    color: #000000;
    
  }
`;
export const SDivBadges = styled.div`
margin-top:10px;
display:inline-block;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 10pt !important;
line-height: 136.69%;
text-align: center;
letter-spacing: 0.01em;
color: #9E8117 !important;
background: #FFEFB5;
border-radius: 5px;
padding:3pt 20pt;
`;
export const SDivInformation = styled.div`
  display:flex;
  width:100% !important;
  padding-left:10px;
  padding-right:10px;
  margin-bottom:10px;
  line-height: 1em;
  h3{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;    
    color: #E8703A;
    margin-bottom:-1px;
    }
  span{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;       
    color: #000000;
    line-height: 136.69%;
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
 export const SDivRow= styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0 !important;
  margin-right:10px !important;
  margin-left:10px !important;
 `;

export const SDivAnnouncementBtn = styled.div`
  display:flex;
  width:100% !important;
  padding-left:10px;
  padding-right:10px;
  margin-bottom:10px;
  
`;
export const SDivAnnouncement = styled.div`
  width:100% !important;
  padding-left:10px;
  padding-right:10px;
  margin-bottom:10px;
  line-height: 1em;
  h3{
    family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;  
    letter-spacing: 0.0025em;
    color: #737373;
    margin-bottom:-1px;
    }
  span{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px; 
    letter-spacing: 0.01em;
    color: #000000;
    }
    div{
      padding-top:10px;
      padding-bottom:10px;
      margin-right: 0;
      margin-left:0;
    }
    &.invisible{
      display:none !important;
    }
`;

export const SDivGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width:100% !important;
  margin-bottom:10px;
  margin-top:30px;
  text-align: center;
  justify-content: center;
`;

export const SDivOption = styled.div` 
  width: 109px !important;
  height: 96px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  text-align: center;
  margin:10px 5px;
  cursor:pointer;
  img{
    margin-top:15px !important;
    border:0;
  }
  span{
    display:block;
    margin-top:10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.0025em;
    color: #000000;
  }  
`;

export const SDivBtnHome= styled.div`
  display:flex;
  width:100% !important;
  padding-left:10px;
  padding-right:10px;
  margin-bottom:20px;
  text-align: center;
  justify-content: center;
  div{     
    width:70%;
  }
`;