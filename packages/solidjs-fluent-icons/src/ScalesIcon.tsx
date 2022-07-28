
import { splitProps, ComponentProps, JSX } from "solid-js";

function ScalesIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.5 3a.5.5 0 000 1h.75L2.08 9.22a.95.95 0 00-.08.4 3 3 0 006 0 .95.95 0 00-.08-.4L5.75 4H9.5v10H6a2 2 0 100 4h8a2 2 0 100-4h-3.5V4h3.75l-2.17 5.22a.95.95 0 00-.08.4 3 3 0 006 0 .95.95 0 00-.08-.4L15.75 4h.75a.5.5 0 000-1h-13zM5 11.5A2 2 0 013.06 10h3.88A2 2 0 015 11.5zm0-6.7L6.75 9h-3.5L5 4.8zM6 15h8a1 1 0 110 2H6a1 1 0 110-2zm10.75-6h-3.5L15 4.8 16.75 9zm-3.69 1h3.88a2 2 0 01-3.88 0z"/>
</svg>

  );
}
export default ScalesIcon;