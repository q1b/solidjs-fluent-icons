
import { splitProps, ComponentProps, JSX } from "solid-js";

function ShareScreenPersonOverlayInsideIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM11 11a1 1 0 011-1h3a1 1 0 011 1v1a2 2 0 01-2 2h-1a2 2 0 01-2-2v-1zM5 6a1 1 0 00-1 1v3a1 1 0 001 1h4a1 1 0 001-1V7a1 1 0 00-1-1H5zm-.25-2A2.75 2.75 0 002 6.75v6.5A2.75 2.75 0 004.75 16h10.5A2.75 2.75 0 0018 13.25v-6.5A2.75 2.75 0 0015.25 4H4.75zM3 6.75C3 5.78 3.78 5 4.75 5h10.5c.97 0 1.75.78 1.75 1.75v6.5c0 .97-.78 1.75-1.75 1.75H4.75C3.78 15 3 14.22 3 13.25v-6.5z"/>
</svg>

  );
}
export default ShareScreenPersonOverlayInsideIcon;