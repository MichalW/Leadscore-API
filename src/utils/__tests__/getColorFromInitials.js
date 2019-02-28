import getColorFromInitials from '../getColorFromInitials';

it('should get color from getColorFromInitials', () => {
  const initials = 'MW';
  const color = getColorFromInitials(initials);

  expect(color).toEqual('rgb(126,46,144)');
});

it('should get color from getColorFromInitials without initials', () => {
  const color = getColorFromInitials();

  expect(color).toEqual('rgb(0,0,230)');
});

it('should get color from getColorFromInitials with one initial', () => {
  const initials = 'E';
  const color = getColorFromInitials(initials);

  expect(color).toEqual('rgb(190,222,24)');
});
