import styled from "styled-components";

export const Section = styled.div`
  
  background-color: #1f252f;

`;

export const Wrapper = styled.div`
height: 280px;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  font-family: OpenSans;
  font-size: 60px;
  line-height: 60px;
  font-weight: 300;
`;

export const Text = styled.p`
  font-family: OpenSans;
  margin-bottom: 15px;
  font-size: 14px;
  letter-spacing: 0.05em;
  color: #ffffff;
`;

export const Line = styled.div`
  margin-bottom: 15px;
  width: 31px;
  height: 2px;
  background-image: linear-gradient(90deg, #00f0ff -25%, #ebacfd 125%);
`;
