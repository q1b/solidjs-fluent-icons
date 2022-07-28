
import { splitProps, ComponentProps, JSX } from "solid-js";

function TargetEditIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM5 10a5 5 0 0110-.06l-1.15 1.15a4 4 0 10-2.76 2.76l-.82.82c-.1.1-.2.21-.29.33A5 5 0 015 10zm5-7a7 7 0 016.93 6c.34-.02.69.02 1.02.12a8 8 0 10-8.94 8.82c0-.1.02-.2.05-.29l.17-.7A7 7 0 0110 3zm.98 12.38l4.83-4.83a1.87 1.87 0 012.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.08l.37-1.5c.1-.38.3-.73.58-1.01z"/>
</svg>

  );
}
export default TargetEditIcon;