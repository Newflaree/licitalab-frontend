import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme';

export const TodoApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
}

