import styled from "styled-components"
import { Link } from "gatsby"
import React from "react"
import { menuData } from "../../data/menuData"

export default function Header() {
  return (
    <Wrapper>
      <img src="/images/logos/logo.svg" alt="logo" />
      <MenuWrapper>
        {menuData.map((item, index) => {
          return (
            <Link to="item.link" key={index}>
              <MenuItem>
                <img src={item.icon} alt={item.title} />
                {item.title}
              </MenuItem>
            </Link>
          )
        })}
      </MenuWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(
    ${menuData.length},
    auto
  ); // Columns, value for each column
`

const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: 10px;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  transition: 0.4s;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`
