import ReactTestRenderer from 'react-test-renderer';
import Home from  './Home';

describe('Home component', () => {
    it('should match snapshot', () => {
        const component = ReactTestRenderer.create(
            <Home/>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});