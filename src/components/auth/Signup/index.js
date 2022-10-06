import React , { useState } from "react";
import { useForm } from "react-hook-form";
import { Row,Col} from "react-bootstrap";
import BaseLayout from "components/layout/BaseLayout";
import {  Link } from "react-router-dom";
import { reverseURL } from "components/app/Router/utils";
import {
  SDivLogo,
  SDivForm,
  SDivLB01,
  SDivLB02,
  SDivLB03,
  SDivLB04,
  SDivError
}from "./customstyled"
import { SInputText,SErrorLabel,SLoading,SBtnPrimary } from "components/styled-components/components";
import { useHistory } from "react-router-dom";

const INPUT_REQUIRED_MSG = "Campo obligatorio";

function Signup(props) {
  const [passwordShown, setPasswordShown] = useState(false);
  const { handleSubmit, register,formState: { errors } } = useForm();
  const [errormessage, setErrorMessage] = useState("");
  const[IsLoading,setIsLoading]=useState(false);
  const history = useHistory();
  function onSubmit(event) {
    setIsLoading(true);
    history.push(reverseURL({ name: "accountcreated" }));
    
  }
  function togglePasswordVisiblity(event) {
    event.preventDefault();
    setPasswordShown((prev) => !prev);
  }
  return (
    <>
    <BaseLayout >
      <SDivLogo>
        <img
            src={require("components/assets/img/gobernanzza_log.svg").default}
            alt="Gobernanzza"
          />
      </SDivLogo>
      <SDivLB01><h3>Crear cuenta</h3></SDivLB01>
      <SDivLB02>Bienvenid@,<br/> introduce tus datos para crear una cuenta</SDivLB02>
      <SDivError ><SErrorLabel >{errormessage}</SErrorLabel></SDivError>
      <SDivForm>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col>
              <SInputText
                type="email"
                placeholder="Email"
                {...register("email",{
                  required: INPUT_REQUIRED_MSG,
                    pattern: {
                      value:
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,
                      message: "Correo electrónico Invalido",
                    }
                })}
                className={errors.email ? "is-error" : ""}
              />
              {errors.email && (
                  <SErrorLabel>{errors.email.message}</SErrorLabel>
                )}
            </Col>
          </Row>
          <Row className="pdt-15">
            <Col>
              <SInputText
                type={passwordShown ? "text" : "password"}
                placeholder="Contraseña"
                {...register("password",{
                  required: INPUT_REQUIRED_MSG,
                })}
                className={errors.password ? "is-error" : ""}
              />
              <i
                className={`inputicon  ${
                  passwordShown ? " icon-eye" : "icon-hide"
                }`}
                id="iconPassword"
                onClick={togglePasswordVisiblity}
              ></i>
              {errors.password && (
                  <SErrorLabel>{errors.password.message}</SErrorLabel>
                )}
                </Col>
          </Row>
          <Row className="pdt-15">
            <Col>
              <SBtnPrimary type="submit" disabled={IsLoading} >
              {IsLoading ? (
                <SLoading />
              ) : ""}
              <span>ACEPTAR</span> </SBtnPrimary>
            </Col>
          </Row>
          <SDivLB03>Ya dispongo de una cuenta,{"  "}<Link to={reverseURL({ name: "signup" })}>Iniciar sesión</Link></SDivLB03>
          <SDivLB04>Conocer más sobre ,{"  "}<a href="https://gobernanzza.app/" target="_black">Gobernanzza</a></SDivLB04>
        </form>
       </SDivForm> 
    </BaseLayout>
  </>
  );
}
export default Signup;