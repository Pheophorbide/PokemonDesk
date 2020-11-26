import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('На вход принимаем строку со всеми маленькими буквами и отдаем строку, которая начинается с большой', () => {
    const str = toCapitalizeFirstLetter("all my life i've been searching for something");
    expect(str).toBe("All my life i've been searching for something");
  });

  test('На вход принимаем строку со всеми большими буквами, и отдает строку, которая начинается с большой, а остальные - маленькие', () => {
    const str = toCapitalizeFirstLetter('SOMETHING NEVER COMES NEVER LEADS TO NOTHING');
    expect(str).toBe('Something never comes never leads to nothing');
  });

  test('На вход принимаем строку с разными буквами, и отдает все равно строку, которая начинается с большой, а остальные - маленькие', () => {
    const str = toCapitalizeFirstLetter("NoThiNg SaTisFieS BuT I'm GeTtIng CLoSE");
    expect(str).toBe("Nothing satisfies but i'm getting close");
  });

  test('На вход принимаем строку c большой буквы, а остальные маленькие, и отдает строку, которая начинается с большой, а остальные - маленькие', () => {
    const str = toCapitalizeFirstLetter('Closer to the prize');
    expect(str).toBe('Closer to the prize');
  });

  test('На вход принимаем строку c маленькой буквы, а остальные большие, и отдает строку, которая начинается с большой, а остальные - маленькие', () => {
    const str = toCapitalizeFirstLetter('aT THE END OF THE ROPE');
    expect(str).toBe('At the end of the rope');
  });

  test('На вход принимаем пустую строку и отдаем пустую', () => {
    const str = toCapitalizeFirstLetter('');
    expect(str).toBe('');
  });
});
