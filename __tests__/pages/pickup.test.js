import { render, screen } from '@testing-library/react'
import Pickup from '@/pages/pickup'

describe("PickupPage", () => {
    it('render Pickup page', async () => {
        render(
            <Pickup />
        );
        const paginationDivElement = await screen.getByText('Pickup')
        expect(paginationDivElement).toBeInTheDocument();
    });

});
