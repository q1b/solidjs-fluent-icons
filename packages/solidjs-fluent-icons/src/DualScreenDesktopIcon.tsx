
import { splitProps, ComponentProps, JSX } from "solid-js";

function DualScreenDesktopIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 4c0-1.1.9-2 2-2h10a2 2 0 012 2v7a2 2 0 01-2 2h-2v2h1a.5.5 0 010 1h-2v-4h3a1 1 0 001-1V4a1 1 0 00-1-1H6a1 1 0 00-1 1v3H4V4zm-2 6c0-1.1.9-2 2-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6zm2-1a1 1 0 00-1 1v6a1 1 0 001 1h2.5V9H4zm6 8a1 1 0 001-1v-6a1 1 0 00-1-1H7.5v8H10zm-1-2h.5a.5.5 0 010 1H9a.5.5 0 010-1zm-5 .5c0-.28.22-.5.5-.5H5a.5.5 0 010 1h-.5a.5.5 0 01-.5-.5z"/>
</svg>

  );
}
export default DualScreenDesktopIcon;