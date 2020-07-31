const Engineer = require('../lib/Engineer.js');

test('create an engineer object', () => {
    const engineer = new Engineer('Mike', '43', 'mikesemail', 'github');

    expect(engineer.name).toBe('Mike');
    expect(engineer.id).toBe('43');
    expect(engineer.email).toBe('mikesemail');
    expect(engineer.github).toBe('github');
});

test('gets the engineers name', () => {
    const engineer = new Engineer('Mike', '43', 'mikesemail', 'github');
    expect(engineer.getName()).toBe('Mike');
});

test('gets the engineers id', () => {
    const engineer = new Engineer('Mike', '43', 'mikesemail', 'github');
    expect(engineer.getId()).toBe('43');
});

test('gets the engineers email', () => {
    const engineer = new Engineer('Mike', '43', 'mikesemail', 'github');
    expect(engineer.getEmail()).toBe('mikesemail');
});

test('gets the engineers role', () => {
    const engineer = new Engineer('Mike', '43', 'mikesemail', 'github');
    expect(engineer.getRole()).toBe('engineer');
});

test('gets the engineers office number', () => {
    const engineer = new Engineer('Mike', '43', 'mikesemail', 'github');
    expect(engineer.getGitHub()).toBe('github');
});