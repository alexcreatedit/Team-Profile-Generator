const Employee = require('../lib/employee');
const employee = new Employee('Alex', '1', 'alexdiclothingco@icloud.com');

test('testing constructor values for the employee object', () => {
    expect(employee.name).toBe('Alex');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('alexdiclothingco@icloud.com');
});


test('testing to see if we can get name from getName()', () => {
    expect(employee.getName()).toBe('Alex');
});

test('testing to see if we can get id from getId()', () => {
    expect(employee.getName()).toBe('1');
});

test('testing to see if we can get email from getEmail()', () => {
    expect(employee.getName()).toBe('alexdiclothingco@icloud.com');
});

test('testing to see if we can get role from getRole()', () => {
    expect(employee.getName()).toBe('Employee');
});


