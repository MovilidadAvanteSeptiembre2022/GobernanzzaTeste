import React from "react";
import BaseLayout from "components/layout/BaseLayout";
import {SDivRow,SDivBtnBottom,SDivLeft,SDivRight,SBtn,SDivPdf} from "./customstyled"
import Menu from "components/layout/Menu";
import { reverseURL } from "components/app/Router/utils";
import { useHistory } from "react-router-dom";
import PdfViewer from "../../shared/PdfViewer"
import samplePDF from "../../assets/files/pdf_example.pdf";
function VotingView(props) {
  const history = useHistory();
 
  const onClickBtn = () => {      
       history.push(reverseURL({ name: "searchcoop7" }));
 
  };
  return (
    <>
      <BaseLayout>
        <Menu  title="Cooperativa" />
   
        <SDivRow>
              <div> <img
                          src={require("components/assets/img/icon-pdf.svg").default}
                          alt="Gobernanzza"
                        />
              </div>
              <span>Acta-de-Consejo-Rector-2021-02.doc </span>
        </SDivRow>
      <SDivPdf>
      <PdfViewer pdf={samplePDF} />
      </SDivPdf>
      <SDivBtnBottom>
          <SDivLeft>
            <i className="icon-arrow"></i>
          </SDivLeft>
          <SDivRight>
              <SBtn onClick={onClickBtn}>
                           <span>Firmar documento</span> </SBtn>
          </SDivRight>
      </SDivBtnBottom>
      </BaseLayout>
    </>
  );
}
export default VotingView;