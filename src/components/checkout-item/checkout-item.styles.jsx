import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  font-weight: 300;

  .image-container {
    width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    display: flex;
    align-items: center;

    .arrow {
      cursor: pointer;
      user-select: none;
    }

    .value {
      margin: 0 10px;
    }
  }

  .remove-button {
    padding-left: 12px;
    cursor: pointer;
    opacity: 0.6;
    font-weight: 100;
    font-size: 22px;
    transition: opacity 0.1s;

    &:hover,
    &:focus {
      opacity: 1;
    }
  }
`;
