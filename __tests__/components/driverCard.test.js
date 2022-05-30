import { render, screen } from '@testing-library/react'
import DriverCard from '@/components/driver-card';

describe("DriverCard", () => {
    it('render driver card', async () => {
        render(
            <DriverCard />
        );
        const paginationDivElement = await screen.getByText('Driver ID')
        expect(paginationDivElement).toBeInTheDocument();
    });
});
