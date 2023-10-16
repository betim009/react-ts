import { render, screen } from '@testing-library/react';

import App from './App';

it('should show "Hello World" text', () => {
    render(<App />);
    expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
})