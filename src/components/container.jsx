import React from "react";
import { Container } from "react-bootstrap";

const Content = ({ children }) => {
  return <Container className="p-0">{children}</Container>;
};
export default Content;
