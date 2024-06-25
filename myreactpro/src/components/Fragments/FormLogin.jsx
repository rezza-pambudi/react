import { useRef, useEffect } from "react";
import InputForm from "../elements/Input";
import Button from "../elements/button";
import { login } from "../../services/auth.service";

const FormLogin = () => {
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
        console.log(res.response.data);
      }
    });
  };
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
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
