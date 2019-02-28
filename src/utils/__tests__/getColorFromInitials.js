import getColorFromInitials from '../getColorFromInitials';

it('renders LoginForm with loading', () => {
  const initials = 'MW';
  const color = getColorFromInitials(initials);

  expect(color).toEqual('rgb(119,39,111)');
});
