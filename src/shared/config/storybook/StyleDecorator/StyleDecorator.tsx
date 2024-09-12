import { Decorator } from '@storybook/react/*';
// eslint-disable-next-line feature-sliced-import-checker/layer-imports-checker
import 'app/styles/index.scss';

export const StyleDecorator: Decorator = (Story) => {
  return <Story />;
};
