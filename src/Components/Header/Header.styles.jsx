import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const OptionStyled = css`
  padding: 10px 15px;
  cursor: pointer;
`

const HeaderStyled = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

const LogoStyled = styled(Link)`
   height: 100%;
   width: 70px;
   padding: 25px;
`
const OptionsStyled = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const OptionLink = styled(Link)`
${OptionStyled}
`

const OptionDiv = styled.div`
${OptionStyled}
`

export {
  HeaderStyled,
  LogoStyled,
  OptionsStyled,
  OptionLink,
  OptionDiv
}
