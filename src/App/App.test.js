import App from './App';
import ReactTestRenderer from 'react-test-renderer';

describe('Home component', () => {
    it('should match snapshot', () => {
        const component = ReactTestRenderer.create(
            <App/>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
