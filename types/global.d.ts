declare module "*.svg" {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>
  ): React.ReactElement;
  const url: string;
  export default url;
}

type MergeParameters<T extends (...args: any) => any, K = unknown> = T extends (
  ...args: infer P
) => any
  ? P[0] & K
  : never;

type MergeConstructorParameters<
  T extends abstract new (...args: any) => any,
  K = unknown
> = T extends abstract new (...args: infer P) => any ? P[0] & K : never;
