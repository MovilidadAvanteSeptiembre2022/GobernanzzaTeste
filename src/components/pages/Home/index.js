import React from "react";
import BaseLayout from "components/layout/BaseLayout";
import {SDivHome,FooterBox} from "./customstyled"
import { reverseURL } from "components/app/Router/utils";
import { useHistory } from "react-router-dom";
function Home(props) {
  const history = useHistory();
  const onClickBtn = () => {
       history.push(reverseURL({ name: "signup" }));
 
  };

  return (
    <>
      <BaseLayout>
        <SDivHome>
          <img
              src={require("components/assets/img/gobernanzza_log.svg").default}
              alt="Gobernanzza"
            />
        </SDivHome>
        <FooterBox >
            <i className="icon-next" onClick={onClickBtn}></i>
        </FooterBox>
      </BaseLayout>
    </>
  );
}
export default Home;
