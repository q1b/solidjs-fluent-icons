
import { splitProps, ComponentProps, JSX } from "solid-js";

function SlideHideIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 3a4 4 0 00-4 4v5c0 1.1.9 2 2 2v-1a1 1 0 01-1-1V7a3 3 0 013-3h7a1 1 0 011 1h1a2 2 0 00-2-2H6zm0 5a1 1 0 011-1h.5a.5.5 0 000-1H7a2 2 0 00-2 2v.5a.5.5 0 001 0V8zm3.5-2a.5.5 0 000 1h1a.5.5 0 000-1h-1zm3 0a.5.5 0 000 1h1a.5.5 0 000-1h-1zm3 0a.5.5 0 000 1h.5a1 1 0 011 1v.5a.5.5 0 001 0V8a2 2 0 00-2-2h-.5zM6 10.5a.5.5 0 00-1 0v2a.5.5 0 001 0v-2zm12 0a.5.5 0 00-1 0v2a.5.5 0 001 0v-2zm-12 4a.5.5 0 00-1 0v.5c0 1.1.9 2 2 2h.5a.5.5 0 000-1H7a1 1 0 01-1-1v-.5zm12 0a.5.5 0 00-1 0v.5a1 1 0 01-1 1h-.5a.5.5 0 000 1h.5a2 2 0 002-2v-.5zM9.5 16a.5.5 0 000 1h1a.5.5 0 000-1h-1zm3 0a.5.5 0 000 1h1a.5.5 0 000-1h-1z"/>
</svg>

  );
}
export default SlideHideIcon;