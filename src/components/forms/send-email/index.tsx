import React, { useState } from "react";
import { Container, Input, Textarea, Button } from "./Form.styles";
import { ButtonType } from "myButton";

const Form: React.FC = () => {
  const [chars, setChars] = useState(0);
  const controlChars = (chars: number) => {
    if (chars <= 600) setChars(chars);
    else console.log("está lá");
  };

  return (
    <Container>
      <h2 style={{ alignSelf: "start" }}> Send me an Email</h2>
      <div>
        Hey, i hope you are good. For me will be a pleasure to receive an email
        from you. Please tell me waht is in your mind 😍
      </div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          margin: 20,
          gap: "1.5rem",
          boxSizing: "border-box",
        }}
        action=""
      >
        <Input type="text" placeholder="Full Name" />
        <Input type="text" placeholder="Email" />
        <Textarea
          placeholder="What is in your mind..."
          name=""
          id=""
          cols={30}
          rows={7}
          maxLength={300}
          onChange={(e) => controlChars(e.target.value.length)}
        />
        <span
          style={{
            alignSelf: "end",
            marginTop: "-21px",
            marginBottom: "-21px",
            fontSize: ".8rem",
          }}
        >
          {chars + "/600"}
        </span>
        <Button>SEND EMAIL</Button>
      </form>
    </Container>
  );
};

export default Form;
