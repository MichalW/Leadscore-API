import getColorFromInitials from '../getColorFromInitials';

it('should get color from getColorFromInitials', () => {
  const initials = 'MW';
  const color = getColorFromInitials(initials);

  expect(color).toEqual('rgb(119,39,111)');
});

it('should get color from getColorFromInitials without initials', () => {
  const color = getColorFromInitials();

  expect(color).toEqual('rgb(100, 100, 100)');
});
