declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    constructor(
      target: gsap.DOMTarget,
      vars?: {
        type?: string;
        linesClass?: string;
        wordsClass?: string;
        charsClass?: string;
        [key: string]: unknown;
      }
    );
    revert(): void;
    split(vars?: object): SplitText;
  }
  export default SplitText;
}

declare module "gsap-trial/ScrollSmoother" {
  import { Plugin } from "gsap";
  export class ScrollSmoother extends Plugin {
    static create(vars?: object): ScrollSmoother;
    static get(target?: Element | string): ScrollSmoother;
    static refresh(safe?: boolean): void;
  }
  export default ScrollSmoother;
}
