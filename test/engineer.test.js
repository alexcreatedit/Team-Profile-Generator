const Engineer = require('../lib/engineer');
const engineer = new Engineer('Alex', '1', 'alexdiclothingco@icloud.com', 'alexcreatedit');

test('testing constructor values for the manager object', () => {
    expect(engineer.name).toBe('Alex');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('alexdiclothingco@icloud.com');
    expect(engineer.githubUsername).toBe('alexcreatedit');
});

test('testing to see if we can get name from getName()', () => {
    expect(engineer.getName()).toBe('Alex');
});

test('testing to see if we can get id from getId()', () => {
    expect(engineer.getId()).toBe('1');
});

test('testing to see if we can get email from getEmail()', () => {
    expect(engineer.getEmail()).toBe('alexdiclothingco@icloud.com');
});

test('testing to see if we can get id from getId()', () => {
    expect(engineer.getgithubUsername()).toBe('alexcreatedit');
});