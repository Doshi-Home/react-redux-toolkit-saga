import styled from 'styled-components'

import bgImage from 'assets/images/bg-auth.svg'

export const Wrapper = styled.div``

export const Bg = styled.div`
  min-height: 100%;
  min-width: 1024px;
  width: 100%;
  height: auto;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  background: url(${bgImage}) no-repeat center center fixed;
  background-size: cover;
  &:after {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
export const FormLogin = styled.div`
  position: relative;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
 
  max-width: 651px;
  width: 100%;
  padding: 29px 54px;
  background: var(--color-white);
  text-align: center;
  border-radius: 10px;
`

export const WrapLogo = styled.div``
