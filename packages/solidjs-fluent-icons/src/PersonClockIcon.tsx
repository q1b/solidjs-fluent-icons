
import { splitProps, ComponentProps, JSX } from "solid-js";

function PersonClockIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 6a4 4 0 118 0 4 4 0 01-8 0zm4-3a3 3 0 100 6 3 3 0 000-6zM2 13a2 2 0 012-2h6.26c-.26.3-.48.64-.66 1H4a1 1 0 00-1 1c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 009 17l.6-.01c.17.34.37.66.61.95-.4.04-.8.06-1.21.06a9.14 9.14 0 01-4.87-1.2A4.35 4.35 0 012 13zm17 1.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM14.5 12a.5.5 0 00-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 000-1h-1v-1.5a.5.5 0 00-.5-.5z"/>
</svg>

  );
}
export default PersonClockIcon;