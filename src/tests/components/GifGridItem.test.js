import {GifGridItem} from '../../components/GifGridItem'
import {shallow} from 'enzyme'

describe('prueba en el componente <GifGridItem />', () => {
    
    const title = 'Un título';
    const url = 'https://localhost/lago.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)

    test('Prueba que el componente se muestre correctamente', () => {
     
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un párrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('debe de tener la imagen igual al url y al alt de los props', () => {
        
        const img = wrapper.find('img');
        // console.log(img.prop('src'))
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })
    
    test('debe tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className')

        expect(className.includes('animate__fadeIn')).toBe(true)
    })
    
})
