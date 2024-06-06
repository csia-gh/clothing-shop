import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ProductCardContainer,
  ProductImage,
  ProductFooter,
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

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
