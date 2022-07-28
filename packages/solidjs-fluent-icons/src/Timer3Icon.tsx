
import { splitProps, ComponentProps, JSX } from "solid-js";

function Timer3Icon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.5 2a.5.5 0 000 1h4a.5.5 0 000-1h-4zm7.66 1.93a.5.5 0 10-.71.7l1.41 1.42a.5.5 0 10.71-.7l-1.41-1.42zM9.5 6a.5.5 0 00-.5.5v5a.5.5 0 001 0v-5a.5.5 0 00-.5-.5zm0 12c.88 0 1.73-.16 2.5-.46l.01-.07a1.5 1.5 0 01.45-1.25A6 6 0 1115.42 10a3.8 3.8 0 011.03.12A7 7 0 109.5 18zm4.34-5.29l.03-.02a2.57 2.57 0 01.47-.33c.32-.2.73-.36 1.16-.36.9 0 1.5.62 1.5 1.25 0 .28-.17.58-.51.84-.34.25-.8.41-1.24.41a.5.5 0 000 1c.44 0 .9.16 1.24.41.34.26.51.56.51.84 0 .63-.6 1.25-1.5 1.25-.43 0-.84-.17-1.16-.36a3.37 3.37 0 01-.47-.33l-.02-.02a.5.5 0 00-.7.72h.01l.01.02.04.03a3.68 3.68 0 00.62.45c.4.23 1 .49 1.67.49 1.32 0 2.5-.95 2.5-2.25 0-.7-.4-1.26-.91-1.64l-.16-.11.16-.11c.5-.38.91-.95.91-1.64 0-1.3-1.18-2.25-2.5-2.25-.68 0-1.27.26-1.67.5a4.35 4.35 0 00-.62.44l-.04.03v.01h-.01a.5.5 0 00.68.73z"/>
</svg>

  );
}
export default Timer3Icon;