import styled from "styled-components";

const RowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
// eslint-disable-next-line react/prop-types
const Row = ({children}) => {
  return <RowStyled>{children}</RowStyled>;
};

export default Row;
