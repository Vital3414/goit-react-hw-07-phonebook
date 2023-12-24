import styled from 'styled-components';

export const ContactForm = styled.form`
  box-sizing: border-box;
  width: 400px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  background-color: #efefef;
  border-radius: 10px;
`;

export const InputBlock = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputText = styled.span`
  display: block;
  font-size: 18px;
`;

export const Input = styled.input`
  width: 270px;
  height: 30px;
  padding: 6px;
  border: 1px solid grey;
  border-radius: 3px;
  text-align: right;
`;

export const SubmitBtn = styled.button`
  display: block;
  width: 120px;
  height: 30px;
  margin-left: auto;
`;
