import 'jest-location-mock';

import '@testing-library/jest-dom';

import { TextEncoder } from 'util';
import ResizeObserver from 'resize-observer-polyfill';

global.TextEncoder = TextEncoder;

global.ResizeObserver = ResizeObserver;

Object.defineProperty(global.SVGElement.prototype, 'getScreenCTM', {
  writable: true,
  value: jest.fn(),
});

global.matchMedia = jest.fn(query => ({
  media: query,
  matches: false,
  onchange: null,
  addListener: jest.fn(),
  dispatchEvent: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

Object.defineProperty(global.SVGElement.prototype, 'getBBox', {
  writable: true,
  value: jest.fn().mockReturnValue({
    x: 0,
    y: 0,
  }),
});

Object.defineProperty(global.SVGElement.prototype, 'getComputedTextLength', {
  writable: true,
  value: jest.fn().mockReturnValue(0),
});

Object.defineProperty(global.SVGElement.prototype, 'createSVGMatrix', {
  writable: true,
  value: jest.fn().mockReturnValue({
    x: 10,
    y: 10,
    inverse: () => {},
    multiply: () => {},
  }),
});

beforeAll(() => {
  // https://github.com/nock/nock/issues/2200#issuecomment-1699838032
  jest.useFakeTimers({ advanceTimers: true });
  jest.setSystemTime(new Date('2024-03-01'));
});
