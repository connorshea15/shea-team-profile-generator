const Manager = require('../lib/Manager.js');

test('create a manager object', () => {
    const manager = new Manager('Mike', '43', 'mikesemail', '43');

    expect(manager.name).toBe('Mike');
    expect(manager.id).toBe('43');
    expect(manager.email).toBe('mikesemail');
    expect(manager.officeNumber).toBe('43');
});

test('create a manager object', () => {
    const manager = new Manager('Mike', '43', 'mikesemail', '43');

    expect(manager.getName).toHaveProperty('name');
});
