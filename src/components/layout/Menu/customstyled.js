import styled from "styled-components";
export const SDivMenu = styled.div`
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  width:100% !important;
  height:50px;
  background: #E8703A;
  font-family: Roboto;
  color: #FFFFFF;
  vertical-align: middle;
  padding-left:15pt;
  padding-right:15pt;
  padding-top:8pt;
  span{
        font-style: normal;
        font-weight: bold;
        font-size: 20px;        
        letter-spacing: 0.01em;
        vertical-align: middle;
  }
  nav{
    margin: 0;
    padding: 0;
    margin-top: 0;
    list-style: none;
    float: right!important;
  }
  ul{
    position: relative;
    white-space: nowrap;
    float: right;
  }
  ul > li{
    padding:0px 8px;
    position: relative;
    white-space: nowrap;
    display:inline-block;
  }
  ul > li > a{
   color:#fff !important;
   font-size:20px;
  }
  ul > li > a:hover{
    text-decoration: none !important;
    font-weight:  !important;;
   }
`;