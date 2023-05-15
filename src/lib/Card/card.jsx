import styled from "styled-components";
import amazon_s3_log from "../assets/amazon_s3.svg";
import arrow from "../assets/arrow.svg";

export const Card = ({ title, badgeText, description, infoUrl, infoText }) => (
  <Wrapper>
    <Header>
      <HeaderLeft>
        <img src={amazon_s3_log} alt="Amazon s3 logo" />
        <Title>{title}</Title>
      </HeaderLeft>
      <HeaderRight>
        <Badge>{badgeText}</Badge>
      </HeaderRight>
    </Header>

    <Content>
      <Description>{description}</Description>
    </Content>

    <InfoLink>
      <LinkButton href={infoUrl}>{infoText}</LinkButton>
      <img src={arrow} alt="Arrow right" />
    </InfoLink>
  </Wrapper>
);

const Wrapper = styled.div`
  background-color: #f6f7fa;
  border-radius: 4px;
  border: 1px solid #e6e7e9;
  font-family: "Inter";
  font-style: normal;
  max-width: 420px;

  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
`;

const Header = styled.div`
  margin-top: 8px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const HeaderRight = styled.div`
  background: #ffffff;
  border: 1px solid #e6e7e9;
  border-radius: 1000px;
  padding: 3px 12px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
`;

const Badge = styled.p`
  font-size: 12px;
  font-weight: 500;
  font-size: 12px;
`;

const Content = styled.div`
  /* width: 330px; */
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #696e79;
`;

const InfoLink = styled.div`
  display: flex;
  align-items: center;
`;
const LinkButton = styled.a`
  width: max-content;
  text-decoration: none;
  color: #161517;
  font-size: 14px;
  font-weight: 600;
`;
