import React from "react"
import styled from "styled-components"

export default function WaveBackground() {
  return (
    <Wrapper>
      <Background />
      <Wave
        src="/images/waves/wave1.png"
        style={{ top: "100px" }} // Filter performance in old machines may be bad, in that case is better to use an already filtered png
      />
      <Wave src="/images/waves/hero-wave2.svg" style={{ top: "50px" }} />
      <Wave src="/images/waves/hero-wave3.svg" style={{ top: "550px" }} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const Background = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;
`

const Wave = styled.img`
  position: absolute;
  width: 100%;
  z-index: -1;
`
