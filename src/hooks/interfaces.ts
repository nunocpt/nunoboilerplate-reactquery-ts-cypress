export interface IuseIntersectionObserverProps {
  root:
    | undefined
    | {
        current: string;
      };
  target: {
    current: Element | null;
  };
  onIntersect: undefined;
  threshold: number;
  rootMargin: string;
  enabled: boolean;
}
