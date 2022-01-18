import _ from './d01';

test.concurrent.each`
  input | expected
  ${'((()'} | ${2}
  ${'((())))'} | ${-1}
  ${'()'} | ${0}
  `(`expected $expected when input is "$input"`, async ({input, expected}) => {
    expect(_(input)).toBe(expected);
});
