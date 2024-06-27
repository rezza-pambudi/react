import { useRef, useEffect, useState } from "react";
import InputForm from "../elements/Input";
import Button from "../elements/button";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    //localStorage.setItem('email', event.target.email.value);
    //localStorage.setItem('password', event.target.password.value);
    //window.location.href = '/products';
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if(status){
        localStorage.setItem("token", res);
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      {loginFailed && <p className="text-red-500">{loginFailed}</p>}
      <InputForm
        label="Username"
        type="text"
        placeholder="John Doe"
        name="username"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
      />
      <Button variant="bg-blue-600" type="submit">Submit</Button>
    </form>
  );
};

export default FormLogin;
