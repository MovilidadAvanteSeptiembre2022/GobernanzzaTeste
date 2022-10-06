import React,{useState} from "react";
import BaseLayout from "components/layout/BaseLayout";
import {SDivDebates,
        SDivBadges,       
        SDivColLeft,
        SDivColRight,
        SDivRowBtn,
        SDivDiscussionList,
        SDivDiscussionItem,
        Stars,
        SDivBtnView,
        FooterBox,
        SDivLeft,
        SDivRight
} from "./customstyled"
import { SBtnPrimarySm,SBtnDangerSm } from "components/styled-components/components";
import Menu from "components/layout/Menu";
import { useHistory } from "react-router-dom";
import { reverseURL } from "components/app/Router/utils";
import {Col} from 'react-bootstrap'

function DebateItems(props) {
  const [discussion, setDiscussion] = useState(true);
  const history = useHistory();
  const onClickBtn = (value) => {
     if (value==='Abiertos'){
      setDiscussion(true)
    }
    else{
      setDiscussion(false)
    }
    };
    const onClickBtnView = (value) => {
      if (value===1){
          history.push(reverseURL({ name: "opentopics" }));
      }
    };
    const onClickBtnBack = () => {
          history.push(reverseURL({ name: "cooperative" }));
    };
  return (
    <>
      <BaseLayout>
        <Menu title="Debates" />
        <SDivDebates>
              <h3>{(discussion===true?"Debates propuestos":"Temas de debate")}</h3>
              <span>A continuación puedes ver los debates abiertos y cerrados de BLOCKCHAINFUE, COOP.V</span>             
        </SDivDebates>
        <SDivRowBtn>
                     <SDivColLeft>
                          <SBtnPrimarySm onClick={() => {onClickBtn('Abiertos')}} className={(discussion===true?"":"inactive")}>
                             <span>ABIERTOS</span> 
                          </SBtnPrimarySm>
                     </SDivColLeft>
                     <SDivColRight>
                          <SBtnPrimarySm onClick={() => {onClickBtn('Finalizados')}} className={(discussion===true?"inactive":"")}>
                             <span>FINALIZADOS</span> 
                          </SBtnPrimarySm>
                     </SDivColRight>
      </SDivRowBtn>

      <SDivDiscussionList className={(discussion===true?"":"invisible")}>
            <SDivDiscussionItem>
              <SDivBadges green>20 días</SDivBadges>
              <h3>Temas a tratar en el próximo Consejo Rector</h3>
              <span>@Admin  <br/>
                  Creado el 14/05/2021
              </span>
              <Stars score={3}/>
              <SDivBtnView>
                    <SBtnDangerSm onClick={() => {onClickBtnView(1)}}>
                                  <span>ver debate</span> 
                    </SBtnDangerSm>
              </SDivBtnView>             
            </SDivDiscussionItem>
            <SDivDiscussionItem>
              <SDivBadges yellow>05 días</SDivBadges>
              <h3>Incorporación de nuevos socios</h3>
              <span>@Admin  <br/>
                  Creado el 14/05/2021
              </span>
              <Stars score={4}/>
              <SDivBtnView>
                    <SBtnDangerSm onClick={() => {onClickBtnView(0)}}>
                                  <span>ver debate</span> 
                    </SBtnDangerSm>
              </SDivBtnView>             
            </SDivDiscussionItem>
        </SDivDiscussionList>
        <SDivDiscussionList className={(discussion===true?"invisible":"")}>
            <SDivDiscussionItem>
              <SDivBadges >Finalizado</SDivBadges>
              <h3>Temas a tratar en el próximo Consejo rector</h3>
              <span>@Admin  <br/>
                  Creado el 14/05/2021
              </span>
              <Stars score={4}/>
              <SDivBtnView>
                    <SBtnDangerSm onClick={() => {onClickBtnView(0)}}>
                                  <span>ver debate</span> 
                    </SBtnDangerSm>
              </SDivBtnView>             
            </SDivDiscussionItem>
            <SDivDiscussionItem>
              <SDivBadges >Finalizado</SDivBadges>
              <h3>Incorporación de nuevos socios</h3>
              <span>@Admin  <br/>
                  Creado el 14/05/2021
              </span>
              <Stars score={2}/>
              <SDivBtnView>
                    <SBtnDangerSm onClick={() => {onClickBtnView(0)}}>
                                  <span>ver debate</span> 
                    </SBtnDangerSm>
              </SDivBtnView>             
            </SDivDiscussionItem>
            <SDivDiscussionItem>
              <SDivBadges >Finalizado</SDivBadges>
              <h3>Proveedor de servidores</h3>
              <span>@Admin  <br/>
                  Creado el 14/05/2021
              </span>
              <Stars score={4}/>
              <SDivBtnView>
                    <SBtnDangerSm onClick={() => {onClickBtnView(0)}}>
                                  <span>ver debate</span> 
                    </SBtnDangerSm>
              </SDivBtnView>             
            </SDivDiscussionItem>
            
        </SDivDiscussionList>
        <FooterBox >
          <Col>
                      <SDivLeft>
                        <i className="icon-arrow" onClick={onClickBtnBack}></i>
                      </SDivLeft>
                      <SDivRight>
                        {discussion===true &&
                          <>
                              <div><span>PROPONER DEBATE</span><i className="icon-add"/></div>
                              <i className={" icon-minus icon-special"}></i>
                            </>
                        }
                        
                      </SDivRight>
             </Col>         
        </FooterBox>
      </BaseLayout>
    </>
  );
}
export default DebateItems;