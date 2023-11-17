import styled from 'styled-components';

const Btn = styled.button`
  background-color: ${props => props.primary ? "blue" : props.success ? "green" : "red"};
  color: white;
  border-radius:10px;
  padding: ${props => props.btnLg ? "100px 50px" : "10px"};
  &:hover{
    background-color: ${props => props.primary ? "skyblue" : props.success ? "seagreen" : "indianred"};;
  }

`

const Button = () => {
  return <Btn danger>Button Styled Component</Btn>;
};

export default Button;
