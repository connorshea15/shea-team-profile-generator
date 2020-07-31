const Intern = require('../lib/Intern.js');

test('create an intern object', () => {
    const intern = new Intern('Mike', '43', 'mikesemail', 'school');

    expect(intern.name).toBe('Mike');
    expect(intern.id).toBe('43');
    expect(intern.email).toBe('mikesemail');
    expect(intern.school).toBe('school');
});

test('gets the interns name', () => {
    const intern = new Intern('Mike', '43', 'mikesemail', 'school');
    expect(intern.getName()).toBe('Mike');
});

test('gets the interns id', () => {
    const intern = new Intern('Mike', '43', 'mikesemail', 'school');
    expect(intern.getId()).toBe('43');
});

test('gets the interns email', () => {
    const intern = new Intern('Mike', '43', 'mikesemail', 'school');
    expect(intern.getEmail()).toBe('mikesemail');
});

test('gets the interns role', () => {
    const intern = new Intern('Mike', '43', 'mikesemail', 'school');
    expect(intern.getRole()).toBe('intern');
});

test('gets the interns office number', () => {
    const intern = new Intern('Mike', '43', 'mikesemail', 'school');
    expect(intern.getSchool()).toBe('school');
});