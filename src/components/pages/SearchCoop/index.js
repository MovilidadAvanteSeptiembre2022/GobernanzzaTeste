import React,{useState} from "react";
import BaseLayout from "components/layout/BaseLayout";
import {SDivLB01,SDivLB02,DoNotData,SDivSearch,SDivCooperativeList} from "./customstyled"
import { SInputText } from "components/styled-components/components";
import Menu from "components/layout/Menu";
function SearchCoop(props) {
  const [search, setSearch] = useState(false);
  const handleChange = (event) => {
    if(event.target.value !== ''){
      setSearch(true)
    }
    else{
      setSearch(false)
    }
  }

  return (
    <>
      <BaseLayout>
        <Menu title="Buscar"/>
   
      <SDivLB01>Buscar cooperativa</SDivLB01>
      <SDivLB02>Para buscar cooperativas dentro de Gobernanzza puedes hacer introduciendo el nombre, CIF, actividad o localidad de la cooperativa:</SDivLB02>      
      <SDivSearch>
              <SInputText
                type="text"
                placeholder="Buscar cooperativa"
                onChange={handleChange}                
              />
       </SDivSearch>
       {search===false ? 
      (<DoNotData />)
      :<SDivCooperativeList/>
      }
      </BaseLayout>
    </>
  );
}
export default SearchCoop;