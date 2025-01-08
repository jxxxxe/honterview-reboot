import Container from './container';
import Text from './text';

/**
 * @brief Input 합성 컴포넌트
 */
export { InputType } from './container/types';

const Input = Object.assign(Container, {
  Text,
});

export default Input;
