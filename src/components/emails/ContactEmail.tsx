// src/components/emails/ContactEmail.tsx
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail = ({
  name,
  email,
  message,
}: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>New Message from your Portfolio Contact Form</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New Message from {name}</Heading>
        <Text style={paragraph}>
          You received a new message from your portfolio contact form.
        </Text>
        <Text style={details}>
          <strong>From:</strong> {name}
        </Text>
        <Text style={details}>
          <strong>Email:</strong> {email}
        </Text>
        <Heading style={subHeading}>Message:</Heading>
        <Text style={messageBox}>{message}</Text>
      </Container>
    </Body>
  </Html>
);

export default ContactEmail;

// --- Styles ---
const main = {
  backgroundColor: "#f4f4f4",
  fontFamily: "Arial, sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#ffffff",
  border: "1px solid #eaeaea",
  borderRadius: "8px",
  width: "90%",
  maxWidth: "600px",
};

const heading = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#333",
};

const subHeading = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#333",
  marginTop: "20px",
};

const paragraph = {
  fontSize: "16px",
  color: "#555",
  lineHeight: "1.5",
};

const details = {
  fontSize: "16px",
  color: "#555",
  lineHeight: "1.5",
  margin: "5px 0",
};

const messageBox = {
  fontSize: "16px",
  color: "#333",
  lineHeight: "1.5",
  padding: "15px",
  backgroundColor: "#f9f9f9",
  border: "1px solid #ddd",
  borderRadius: "5px",
  whiteSpace: "pre-wrap", 
};