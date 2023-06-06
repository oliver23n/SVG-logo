const Triangle = require('./Triangle');

describe('Triangle', () => {
    it('should instantiate', () => {
        const triangle = new Triangle();
        expect(triangle).toBeInstanceOf(Triangle);
    })  
})