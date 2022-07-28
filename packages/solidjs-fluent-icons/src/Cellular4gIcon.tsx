
import { splitProps, ComponentProps, JSX } from "solid-js";

function Cellular4gIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.5 3h-.25C8.56 3 8 3.56 8 4.25v1.5a1.25 1.25 0 002.5 0h-1a.5.5 0 110-1H11c.28 0 .5.22.5.5v.5a2.25 2.25 0 11-4.5 0v-1.5C7 3.01 8 2 9.25 2h.25c.03 0 1.12 0 1.65 1.02a.5.5 0 11-.89.46.86.86 0 00-.48-.42C9.63 3.01 9.51 3 9.5 3zm7 2a.5.5 0 01.5.41v11.1a.5.5 0 01-.99.08V5.5c0-.28.22-.5.5-.5zm-9 6a.5.5 0 01.5.41v5.09a.5.5 0 01-.99.09V11.5c0-.28.22-.5.5-.5zm-3 2a.5.5 0 01.5.41v3.09a.5.5 0 01-1 .09V13.5c0-.28.22-.5.5-.5zm6-4a.5.5 0 01.5.4v7.1a.5.5 0 01-1 .09V9.5c0-.28.22-.5.5-.5zm3-2a.5.5 0 01.5.41v9.09a.5.5 0 01-1 .09V7.5c0-.27.22-.5.5-.5zM4.96 2.7a.7.7 0 00-1.27-.4L1.13 5.9A.7.7 0 001.7 7h2.26v.5a.5.5 0 101 0V7h.54a.5.5 0 000-1h-.54V2.7zm-1 .94V6H2.28l1.68-2.36z"/>
</svg>

  );
}
export default Cellular4gIcon;