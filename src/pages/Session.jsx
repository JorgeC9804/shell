import React from "react";
import Signup from "../session/Signup";
import Login from "../session/Login";
import { useParams } from "react-router-dom";

/**
 * Ingresar correro y contrase;a
 */

const Session = () => {
  const params = useParams();
  const { namesession } = params;

  return (
    <div>
      <section>{namesession === "login" ? <Login /> : <Signup />}</section>
    </div>
  );
};

export default Session;
