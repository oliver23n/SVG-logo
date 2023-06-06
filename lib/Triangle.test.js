const Triangle = require('./Triangle');

describe('Triangle', () => {
    it('should instantiate', () => {
        const triangle = new Triangle();
        expect(triangle).toBeInstanceOf(Triangle);
    })  
    describe('setColor', () => {
        it('should set color properly', () => {
            const triangle = new Triangle();
            triangle.setColor('red');
            expect(triangle.color).toBe('red');

        })
    })
    describe('render', ()=> {
        it('should render properly', () => {
            const triangle = new Triangle();
            triangle.setColor('red')
            expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="red" />')
        })
    })
   
})