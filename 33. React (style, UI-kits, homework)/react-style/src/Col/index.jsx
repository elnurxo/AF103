import styled from "styled-components";

const ColStyled = styled.div`
  width: calc(100% / 12 * ${props=>props.size});
  padding: 0px 16px;
`;

const Col = (props,) => {
  console.log(props);
  // eslint-disable-next-line react/prop-types
  console.log(props.children);
  // eslint-disable-next-line react/prop-types
  return <ColStyled size={props.size}>{props.children}</ColStyled>;
};

export default Col;
