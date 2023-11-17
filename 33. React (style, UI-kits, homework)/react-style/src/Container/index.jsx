import styled from "styled-components";

const ContainerStyle = styled.div`
  width: 90%;
  margin:0 auto;
`;

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

export default Container;
