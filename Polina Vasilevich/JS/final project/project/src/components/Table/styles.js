import styled from "styled-components";
import {Button} from '../Button/styles';

export const GridContainer = styled.div`
margin: 100px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const InfoContainer = styled.div`
  text-align: center;
  margin-top: 75px;
}`;

export const PriceContainer = styled.div`
  position: relative;
  text-align: center;
  padding: 70px 0;
  border: 1px solid #eaeaea;
  border-radius: 3px;
  background-color: #fff;

  
  :hover {
    // transform: scale(1.2);
    // z-index: 1;
    cursor: pointer;
    background-image: linear-gradient(90.0deg, #00f0ff -24%, #ebacfd 125%);
    background-size: 100% 5px;
    background-repeat: no-repeat;

    ${Button} {
      background-color: #82b440;
      border: 1px solid #75a931;
      box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
    }
  }
`;

export const ItemInfoContainer = styled.div`
  padding: 22px 10%;
  display: inline-block;
  width: 70%;
  border-bottom: 1px solid #eaeaea;
`;

export const Title = styled.h3`
  margin-bottom: 12px;
  font-family: OpenSans;
  font-weight: 600;
  color: #333333;
`;

export const Text = styled.p`
  font-family: OpenSans;
  font-size: 14px;
  line-height: 30px;
  font-weight: 400;
  color: #999999;
`;

export const TextContainer = styled.div`
  margin-bottom: 23px;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
`;
