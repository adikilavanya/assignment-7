import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 8px;
  width: 350px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`
export const LogoImage = styled.img`
  width: 100px;
  align-self: center;
  margin-bottom: 10px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #475569;
`

export const UserInput = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

export const Checkbox = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 5px;
`

export const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: #1e293b;
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #4f46e5;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const SubmitError = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
