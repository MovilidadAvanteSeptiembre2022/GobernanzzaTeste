import Home from "components/pages/Home";
import Signup from "components/auth/Signup";
import AccountCreated from "components/pages/AccountCreated";
import HomeWithoutCoop from "components/pages/HomeWithoutCoop"
import SearchCoop from "components/pages/SearchCoop"
import SearchCoop3 from "components/pages/SearchCoop3"
import JoinToCoop from "components/pages/JoinToCoop"
import Cooperative from "components/pages/Cooperative"
import Debate from "components/pages/Debate"
import SearchCoop7 from "components/pages/SearchCoop7"
import Voting from "components/pages/Voting"
import VotingItems from "components/pages/VotingItems"
import CouncilVoting from "components/pages/CouncilVoting"
import DebateItems from "components/pages/Debateitems"
import VotingView from "components/pages/VotingView"
import OpenTopics from "components/pages/OpenTopics"
import OpenVotes from "components/pages/OpenVotes"
import Confirmation from "components/pages/Confirmation"
const publicRoutes = [
  {
    name: "home",
    route: "/",
    component: Home,
  },
 
  {
    name: "signup",
    route: "/crear-cuenta",
    component: Signup,
  },
  {
    name: "accountcreated",
    route: "/cuenta-creada-con-exito",
    component: AccountCreated,
  },
  {
    name: "homewithoutcoop",
    route: "/inicio-usuario-sin-coop",
    component: HomeWithoutCoop,
  },
  {
    name: "searchcoop",
    route: "/buscador-de-coop",
    component: SearchCoop,
  },
  {
    name: "searchcoop3",
    route: "/buscador-de-coop3",
    component: SearchCoop3,
  },
  {
    name: "jointocoop",
    route: "/unirme-a-esta-cooperativa",
    component: JoinToCoop,
  },
  {
    name: "cooperative",
    route: "/pantalla-principal-miembro",
    component: Cooperative,
  },
  {
    name: "debate",
    route: "/debate",
    component: Debate,
  },
  {
    name: "debateitems",
    route: "/debate-listado",
    component: DebateItems,
  },
  
  {
    name: "searchcoop7",
    route: "/buscador-coop7",
    component: SearchCoop7,
  },
  {
    name: "voting",
    route: "/votaciones",
    component: Voting,
  },
  {
    name: "councilvoting",
    route: "/votacion-consejo",
    component: CouncilVoting,
  },
  {
    name: "votingview",
    route: "/votacion-ver",
    component: VotingView,
  },
  

  {
    name: "votingitems",
    route: "/votacion-listado",
    component: VotingItems,
  },
  
  {
    name: "opentopics",
    route: "/temas-abiertos",
    component: OpenTopics,
  },
  {
    name: "openvotes",
    route: "/votaciones-abiertas",
    component: OpenVotes,
  },
  {
    name: "confirmation",
    route: "/confirmacion-de-voto",
    component: Confirmation,
  },
    

  
];

export default publicRoutes;
