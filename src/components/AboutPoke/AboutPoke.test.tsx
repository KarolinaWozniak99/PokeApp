import {render, screen} from '@testing-library/react';
import AboutPoke from './AboutPoke';

describe("Header component", ()=>{
    test("checking if info about Bulbapedia is rendered", ()=>{
        render(<AboutPoke/>);
        const h1Element = screen.getByText('Bulbapedia');
        expect(h1Element).toBeInTheDocument();
    });
}
)