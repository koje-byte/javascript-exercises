const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Ahamd', () => {
    expect(values.firstName).toEqual('Ahmad');
  });
  test('lastName is Hassan', () => {
    expect(values.lastName).toEqual('Hassan');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 2002', () => {
    expect(values.birthYear).toEqual(2002);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Ahmad Hassan and I am 23 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Ahmad Hassan', () => {
    expect(values.fullName).toEqual('Ahmad Hassan');
  });
  test('age is 23', () => {
    expect(values.age).toEqual(23);
  });
});
