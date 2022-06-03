import {render, screen} from '@testing-library/react';
import Header from './Header';
import userEvent from '@testing-library/user-event'


describe("Header component", ()=>{
    test("checking if text in header is rendered", ()=>{
        render(<Header text={"Example"}/>);
        const h1Element = screen.getByText('Example');
        expect(h1Element).toBeInTheDocument();
    });
})
