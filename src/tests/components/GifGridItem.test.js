import {GifGridItem} from '../../components/GifGridItem'
import {shallow} from 'enzyme'

describe('Prueba en el componente <GifGridItem />', () => {

    test('Prueba que el componente se muestre correctamente', () => {
        
        const title = 'Un título';
        const url = 'https://localhost/lago.jpg';

        const wrapper = shallow(<GifGridItem title={title} url={url}/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
