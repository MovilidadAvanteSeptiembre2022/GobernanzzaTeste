import styled from "styled-components";

export const SDivHome = styled.div`
  display: flex;
  justify-content: center;
  width:100% !important;
  text-align: center;
  height:90vh;
  img{
    margin:auto;
    height: auto;
    width: 70%;
    margin: 0;
    border: 0;
  }

`;

export const FooterBox = styled.div`
  position: relative;
  z-index: 1000;
  bottom: 0;
  padding-bottom:10px;
  vertical-align:bottom !important;
  text-align:right !important;  
  i{
    margin-right:20px !important;
    font-size:40px !important;
    color:#F48C06;
    vertical-align:middle !important;
    cursor:pointer;
  }
`;