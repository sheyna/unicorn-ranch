import ReactTestRenderer from 'react-test-renderer';
import UnicornLocationMarker from "./UnicornLocationMarker";

const testUnicorn = {
    name: "Pink",
    location: "Barn"
}

const moveUnicorn = jest.fn();

describe('Home component', () => {
    it('should match snapshot', () => {
        const component = ReactTestRenderer.create(
            <UnicornLocationMarker
                unic={testUnicorn}
                moveUnicorn={moveUnicorn}
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});