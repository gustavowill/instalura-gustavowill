import propToStyle from '.';

describe('propToStyle', () => {
  describe('when receives an simple argument', () => {
    test('and it is a string', () => {
      const propToStyleResult = propToStyle('textAlign');
      const componentProps = { textAlign: 'center' };
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toEqual({ textAlign: 'center' });
    });
    test('and it is a number', () => {
      const propToStyleResult = propToStyle('flex');
      const componentProps = { flex: '1' };
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toEqual({ flex: '1' });
    });
  });
  describe('when receives an argument with breakpoints', () => {
    test('render only one breakpoint resolution', () => {
      const propToStyleResult = propToStyle('textAlign');
      const componentProps = { textAlign: { xs: 'center' } };
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toMatchSnapshot();
    });
    test('renders two or more breakpoint resolutions', () => {
      const propToStyleResult = propToStyle('textAlign');
      const componentProps = { textAlign: { xs: 'center', md: 'right' } };
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toMatchSnapshot();
    });
  });
});
