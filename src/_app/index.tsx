import { RootLayout } from './layouts';
import { ChildrenProps } from '../shared/types';
import { Provider } from './provider';

export const App = ({ children }: ChildrenProps) => {
  return (
    <RootLayout>
      <Provider>{children}</Provider>
    </RootLayout>
  );
};
