import { render, screen } from '@testing-library/react';
import { type Mock, vi } from 'vitest';
import { UsersPage } from './index.tsx';
import { UserService } from '../../services/user.service';

vi.mock('../../services/user.service');

describe('UsersPage', () => {
  it('shows loading indicator while users are being fetched', () => {
    // Мокаємо getUsers так, щоб він ніколи не завершувався (симуляція завантаження)
    (UserService.getUsers as Mock).mockImplementation(() => new Promise(() => {}));

    render(<UsersPage />);
    expect(screen.getByTestId('loading-block')).toBeInTheDocument();
  });

  it('shows error message when fetching users fails', async () => {
    // Мокаємо getUsers, щоб він повертав null (симуляція помилки)
    (UserService.getUsers as Mock).mockResolvedValue(null);

    render(<UsersPage />);
    // Чекаємо, поки зʼявиться блок помилки
    const errorBlock = await screen.findByTestId('error-block');
    expect(errorBlock).toBeInTheDocument();
  });
});
