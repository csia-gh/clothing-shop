import { useDispatch } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.slice';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ProductCardContainer,
  ProductFooter,
  ProductImage,
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <ProductCardContainer>
      <ProductImage src={imageUrl} alt={`${name}`} />
      <ProductFooter>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </ProductFooter>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
