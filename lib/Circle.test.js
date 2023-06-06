const Circle = require('./Circle');

describe('Circle', () => {
    it('should instantiate', () =>{
        const circle = new Circle();
        expect(circle).toBeInstanceOf(Circle);
    }) 
    describe('setColor',() => {
        it('should set color properly', () =>{
        const circle = new Circle();
        circle.setColor('red');
        expect(circle.color).toBe('red');
        });
    });
    describe('render', () =>{
        it('should render properly', () =>{
            const circle = new Circle();
            circle.setColor('red');
            expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="red"/>')
        })
    })
})