import { editSaveHandler } from '../save-event';

it('should random number if event id is equal to 0', () => {
        const result = newEvent.id(0);
        expect(result).toEqual(Math.floor(Math.random() * 1000))
});