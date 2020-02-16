import React, { memo, ReactNode } from "react"
import Footer from "@components/shared/footer/footer"
import styled from "styled-components"
import { layout } from "@style/design-tokens"

interface Props {
  children: ReactNode
}

const Page: React.FunctionComponent<Props> = memo(({ children }) => (
  <>
    <PageContent>{children}</PageContent>
    <Footer />
  </>
))

export const PageContent = styled.div`
  padding-top: ${layout.scale[16]};
  padding-bottom: ${layout.scale[14]};
`

export default Page
