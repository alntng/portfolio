import styled from "styled-components";

export const NEXT = "NEXT";
export const PREV = "PREV";

export const Item = styled.div`
  text-align: center;
  padding: 100px;
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
`;

export const CarouselContainer = styled.div`
  display: flex;

  transition: ${props => (props.sliding ? "none" : "transform 1s ease")};
  transform: ${props => {
    if (!props.sliding) return "translateX(calc(-100% ))";
    if (props.dir === PREV) return "translateX(calc(-100%))";
    return "translateX(1px)";
  }};
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: max-content;
  word-wrap: normal;

  order: ${props => props.order};
`;

export const SlideButton = styled.button`
    color: #ffffff;
    font-family: sans-serif;
    font-size: 16px;
  line-height: 17px;
    font-weight: 100;
    padding: 10px;
    background-color: #88d0fc;
    border: 1px solid white;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 20px;
  margin-right: 20px;
  text-decoration: none;
  float: ${props => props.float};

  &:active {
    position: relative;
    top: 1px;
  }
  &:focus {
    outline: 0;
  }
`;

export const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  width: 100%;
`;

export const ExtraInfo = styled.div`
  margin-top: 25px;
  display: inline-block;
`;

export const Code = styled.code`
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  margin: 0;
  padding: 0.2em 0.4em;
`;
