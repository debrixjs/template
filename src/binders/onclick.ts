import { type Binding, type Computed } from "debrix";

export default function onclick(
  node: HTMLElement,
  accessor: Computed<(ev: MouseEvent) => void>
): Binding {
  const listen = (listener: (ev: MouseEvent) => void) => {
    node.addEventListener("click", listener);
    return () => node.removeEventListener("click", listener);
  };

  let destroy = listen(accessor.get());
  accessor.observe(() => {
    destroy();
    listen(accessor.get());
  });

  return { destroy: () => destroy() };
}
