import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Button', () => {
  test('Test render', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();

    const toggleButton = screen.getByTestId('sidebar-toggle');
    expect(toggleButton).toBeInTheDocument(); // Перевіряє, чи кнопка існує

    fireEvent.click(toggleButton);

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
