import React,{useState} from "react";
import BaseLayout from "components/layout/BaseLayout";
import {SDivVoting,
        SDivBadges,       
        SDivColLeft,
        SDivColRight,
        SDivRowBtn,
        SDivVotingList,
        SDivVotingItem,
        SDivBtnView,
        FooterBox,
        SDivLeft,
        SDivRight
} from "./customstyled"
import {SBtnSpecialSm, SBtnPrimarySm,SBtnSpecial2Sm } from "components/styled-components/components";
import Menu from "components/layout/Menu";
import { useHistory } from "react-router-dom";
import { reverseURL } from "components/app/Router/utils";
import { MainContainer,WorkArea } from "components/styled-components/components";
import {Col} from 'react-bootstrap'

function VotingItems(props) {
  const [open, setOpen] = useState(true);
  const history = useHistory();
  const onClickBtn = (value) => {
     if (value==='Abiertas'){
      setOpen(true)
    }
    else{
      setOpen(false)
    }
    };
    const onClickBtnView = (value) => {
      if (value===1){
          history.push(reverseURL({ name: "openvotes" }));
      }
    };
    const onClickBtnBack = () => {
      history.push(reverseURL({ name: "cooperative" }));
};
  return (
    <>
      <BaseLayout>
        <Menu title="Votaciones" />
        <SDivVoting>
              <h3>Vota y dá tu opinión</h3>
              <span>A continuación puedes ver las votaciones abiertas y finalizadas de Blockchain Fue</span>
        </SDivVoting>
        <SDivRowBtn>
                     <SDivColLeft>
                          <SBtnPrimarySm onClick={() => {onClickBtn('Abiertas')}} className={(open===true?"":"inactive")}>
                             <span>ABIERTAS</span> 
                          </SBtnPrimarySm>
                     </SDivColLeft>
                     <SDivColRight>
                          <SBtnPrimarySm onClick={() => {onClickBtn('Finalizadas')}} className={(open===true?"inactive":"")}>
                             <span>FINALIZADAS</span> 
                          </SBtnPrimarySm>
                     </SDivColRight>
      </SDivRowBtn>

      <SDivVotingList className={(open===true?"":"invisible")}>
            <SDivVotingItem>
              <SDivBadges green>20 días</SDivBadges>
              <h3>Temas a tratar en el próximo Consejo Rector</h3>
              <span>@Admin  <br/>
                  Creado el 14/05/2021
              </span>           
              <SDivBtnView>
                    <SBtnSpecialSm onClick={() => {onClickBtnView(1)}}>
                                  <span>ver votación</span> 
                    </SBtnSpecialSm>
              </SDivBtnView>             
            </SDivVotingItem>
            <SDivVotingItem>
              <SDivBadges yellow>05 días</SDivBadges>
              <h3>Incorporación de nuevos socios</h3>
              <span>@Admin  <br/>
                  Creado el 14/05/2021
              </span>
              <SDivBtnView>
                    <SBtnSpecialSm onClick={() => {onClickBtnView(0)}}>
                                  <span>ver votación</span> 
                    </SBtnSpecialSm>
              </SDivBtnView>             
            </SDivVotingItem>
        </SDivVotingList>
        <SDivVotingList className={(open===true?"invisible":"")}>
            <SDivVotingItem>
              <SDivBadges green>aprobado</SDivBadges>
              <h3>Temas a tratar en el próximo Consejo rector</h3>
              <span>@Admin  <br/>
                  Creado el 14/05/2021
              </span>
              <SDivBtnView>
                    <SBtnSpecial2Sm onClick={() => {onClickBtnView(0)}}>
                                  <span>Ver detalles</span> 
                    </SBtnSpecial2Sm>
              </SDivBtnView>             
            </SDivVotingItem>
            <SDivVotingItem>
              <SDivBadges >denegado</SDivBadges>
              <h3>Incorporación de nuevos socios</h3>
              <span>@Admin  <br/>
                  Creado el 14/05/2021
              </span>
              <SDivBtnView>
                    <SBtnSpecial2Sm onClick={() => {onClickBtnView(0)}}>
                                  <span>Ver detalles</span> 
                    </SBtnSpecial2Sm>
              </SDivBtnView>             
            </SDivVotingItem>
            <SDivVotingItem>
              <SDivBadges green>aprobado</SDivBadges>
              <h3>Proveedor de servidores</h3>
              <span>@Admin  <br/>
                  Creado el 14/05/2021
              </span>
              <SDivBtnView>
                    <SBtnSpecial2Sm onClick={() => {onClickBtnView(0)}}>
                                  <span>Ver detalles</span> 
                    </SBtnSpecial2Sm>
              </SDivBtnView>             
            </SDivVotingItem>
            
        </SDivVotingList>
        <FooterBox >
            <MainContainer>
              <WorkArea > 
                    <Col xs={12} sm={12} md={7} lg={6} xl={5} >
                      <SDivLeft>
                        <i className="icon-arrow" onClick={onClickBtnBack}></i>
                      </SDivLeft>
                      <SDivRight>
                        {open===true &&
                        <>
                            <div><span>NUEVA VOTACIÓN</span><i className="icon-add"/></div>
                            <i className={"icon-minus icon-special"}></i>
                        </>
                        }
                        
                      </SDivRight>
                    </Col>
                </WorkArea>
            </MainContainer>
        </FooterBox>
      </BaseLayout>
    </>
  );
}
export default VotingItems;