import { NullToCharacterPipe } from './null-to-character.pipe';

describe('NullToCharacterPipe', () => {
  it('create an instance', () => {
    const pipe = new NullToCharacterPipe();
    expect(pipe).toBeTruthy();
  });
});
