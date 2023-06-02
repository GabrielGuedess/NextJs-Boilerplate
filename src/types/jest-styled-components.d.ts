import { type NewPlugin, type Plugin } from 'pretty-format';

type FunctionProps = () => void;

declare global {
  namespace jest {
    interface AsymmetricMatcher {
      $$typeof: symbol;
      sample?: string | RegExp | object | Array<any> | FunctionProps;
    }

    type Value = string | number | RegExp | AsymmetricMatcher | undefined;

    interface Options {
      media?: string;
      modifier?: string;
      supports?: string;
    }

    interface Matchers<R> {
      toHaveStyleRule(property: string, value?: Value, options?: Options): R;
    }
  }
}

export declare const styleSheetSerializer: Exclude<Plugin, NewPlugin>;
