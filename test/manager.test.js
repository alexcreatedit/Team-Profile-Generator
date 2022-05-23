const Manager = require('../lib/manager');
const manager = new Manager('Alex', '1', 'alexdiclothingco@icloud.com', '1194');

test('testing constructor values for the manager object', () => {
    expect(manager.name).toBe('Alex');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('alexdiclothingco@icloud.com');
    expect(manager.OfficeNumber).toBe('1194');
});


test('testing to see if we can get name from getName()', () => {
    expect(manager.getName()).toBe('Alex');
});

test('testing to see if we can get id from getId()', () => {
    expect(manager.getId()).toBe('1');
});

test('testing to see if we can get email from getEmail()', () => {
    expect(manager.getEmail()).toBe('alexdiclothingco@icloud.com');
});

test('testing to see if we can get role from getRole()', () => {
    expect(manager.getRole()).toBe('Employee');
});

test('testing to see if we can get office number from getOfficeNumber()', () => {
    expect(manager.getOfficeNumber()).toBe('1194');
});

