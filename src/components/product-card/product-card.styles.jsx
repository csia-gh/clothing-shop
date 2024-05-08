import styled from 'styled-components';

export const ProductImage = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
  transition: opacity 0.3s;
`;

export const ProductButton = styled.button`
  width: 80%;
  opacity: 0;
  position: absolute;
  top: 255px;
  transition: opacity 0.3s;
`;

export const ProductFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  button {
    width: 80%;
    opacity: 0;
    position: absolute;
    top: 255px;
    transition: opacity 0.3s;
  }

  &:hover ${ProductImage} {
    opacity: 0.8;
  }

  &:hover button {
    opacity: 0.85;
    display: flex;
  }
`;
