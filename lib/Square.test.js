const Square = require('./Square');

describe('Square', () => {
    it('should instantiate', () => {
        const square = new Square();
        expect(square).toBeInstanceOf(Square);
    });
    
    describe('setColor', () => {
        it('should set color properly', () => {
            const square = new Square();
            square.setColor('red');
            expect(square.color).toBe('red');

        });
    })
    describe('render', () => {
        it('should render properly', () => {
            const square = new Square();
            square.setColor('red')
            expect(square.render()).toBe('<rect x="10" y="10" width="300" height="200" fill="red"/>')
        });
    })
})