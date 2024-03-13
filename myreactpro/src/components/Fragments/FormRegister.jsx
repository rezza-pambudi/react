import InputForm from "../elements/Input";
import Button from "../elements/button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Full Name"
        type="text"
        placeholder="insert your name"
        name="fullName"
      />
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
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="******"
        name="confirmPassword"
      />
      <Button variant="bg-blue-600">Submit</Button>
    </form>
  );
};

export default FormRegister;
