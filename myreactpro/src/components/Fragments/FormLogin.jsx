import InputForm from "../elements/Input";
import Button from "../elements/button";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
      />
      <Button variant="bg-blue-600">Submit</Button>
    </form>
  );
};

export default FormLogin;
