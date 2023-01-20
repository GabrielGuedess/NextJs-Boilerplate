/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { NewPlugin, Plugin } from 'pretty-format';

declare global {
  namespace jest {
    interface AsymmetricMatcher {
      $$typeof: symbol;
      sample?: string | RegExp | object | Array<any> | Function;
    }

    type Value = string | number | RegExp | AsymmetricMatcher | undefined;

    interface Options {
      media?: string;
      modifier?: string;
      supports?: string;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    interface Matchers<R, T> {
      // eslint-disable-next-line no-unused-vars
      toHaveStyleRule(property: string, value?: Value, options?: Options): R;
    }
  }
}

export declare const styleSheetSerializer: Exclude<Plugin, NewPlugin>;
