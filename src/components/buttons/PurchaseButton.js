import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Caption2, SmallText } from "../styles/TextStyles"

export default function PurchaseButton(props) {
  const { title, subtitle } = props

  return (
    <Link to="/page-2">
      <Wrapper>
        <IconWrapper>
          <Icon src="/images/icons/credit.svg" className="icon" />
          <Ring src="/images/icons/icon-ring.svg" />
        </IconWrapper>
        <TextWrapper>
          <Title>{title || "Get Pro Access"}</Title>
          <SubTitle>{subtitle || "$19 per month"}</SubTitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;

  display: grid;
  grid-template-columns: 53px auto;
  //align-content: center; // Only works if the child elements together are < than the container
  align-items: center; // That's why we use align-items
  gap: 20px;

  *,
  & {
    transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5); // Inner shadow doesn't show on Chrome, that's why we use the inset
    transform: translateY(-3px);

    .icon {
      transform: scale(1.2);
    }
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`

const Title = styled(Caption2)`
  color: black;
`

const SubTitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`

const IconWrapper = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  box-shadow: 0px 10px 20px rgba(182, 153, 255, 0.3);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center; // Applies to the first column

  ${Wrapper}:hover & {
    filter: hue-rotate(10deg) brightness(140%) saturate(80%);
  }
`

const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;

  ${Wrapper}:hover & {
    // in order to select an element in this way it must have been already declared
    transform: rotate(30deg) scale(1.2) translate(1px, 2px);
  }
`

const Icon = styled.img`
  width: 29px;
  height: 29px;
`
