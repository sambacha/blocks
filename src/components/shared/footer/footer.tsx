import React, { memo } from "react"
import Gutter from "../gutter/gutter"
import Limiter from "../limiter/limiter"
import styled from "styled-components"
import { appearance } from "@style/design-tokens"
import { themeTone } from "@style/theme"

const Footer: React.FunctionComponent = () => (
  <Container>
    <Gutter>
      <Limiter>I am a footer</Limiter>
    </Gutter>
  </Container>
)

const Container = styled.footer`
  height: 100px;
  border-top: ${appearance.borderThickness.regular} solid ${themeTone(300)};
`

export default memo(Footer)
