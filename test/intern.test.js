const Intern = require('../lib/intern');
const intern = new Intern('Alex', '1', 'alexdiclothingco@icloud.com', 'UT Austin');

test('testing constructor values for the manager object', () => {
    expect(intern.name).toBe('Alex');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('alexdiclothingco@icloud.com');
    expect(intern.school).toBe('UT Austin');
});

test('testing to see if we can get name from getName()', () => {
    expect(intern.getName()).toBe('Alex');
});

test('testing to see if we can get id from getId()', () => {
    expect(intern.getId()).toBe('1');
});

test('testing to see if we can get email from getEmail()', () => {
    expect(intern.getEmail()).toBe('alexdiclothingco@icloud.com');
});

test('testing to see if we can get school from getSchool()', () => {
    expect(intern.getSchool()).toBe('UT Austin');
});
