import React from "react";
import {SDivMenu} from "./customstyled"

function Menu(props) {
    const title=props.title;
    const search=((typeof props.search !== 'undefined')?props.search:false);
  return (
        <SDivMenu><span>{title}</span>
        <nav>
          <ul>
            <li><a href="/inicio-usuario-sin-coop"><i className="icon-mail"></i></a></li>
            {(search===true?
                          (<li><a href="/inicio-usuario-sin-coop"><i className="icon-search"></i></a></li>)
                          :(<li><a href="/inicio-usuario-sin-coop"><i className="icon-scan"></i></a></li>)
            )}          
            <li><a href="/inicio-usuario-sin-coop"><i className="icon-menu"></i></a></li>
          </ul>
        </nav>
    </SDivMenu>
  );
}
export default Menu;