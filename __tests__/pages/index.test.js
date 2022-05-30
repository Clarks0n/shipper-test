import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe("HomePage", () => {
    it('render Home page', async () => {
        render(
            <Home />
        );
        const paginationDivElement = await screen.getByText('Home')
        expect(paginationDivElement).toBeInTheDocument();
    });

});
