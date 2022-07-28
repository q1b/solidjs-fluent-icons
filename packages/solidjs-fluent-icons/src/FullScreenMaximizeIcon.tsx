
import { splitProps, ComponentProps, JSX } from "solid-js";

function FullScreenMaximizeIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 5c0-1.1.9-2 2-2h2a.5.5 0 010 1H5a1 1 0 00-1 1v2a.5.5 0 01-1 0V5zm9.5-1.5c0-.28.22-.5.5-.5h2a2 2 0 012 2v2a.5.5 0 01-1 0V5a1 1 0 00-1-1h-2a.5.5 0 01-.5-.5zm-9 9c.28 0 .5.22.5.5v2a1 1 0 001 1h2a.5.5 0 010 1H5a2 2 0 01-2-2v-2c0-.28.22-.5.5-.5zm13 0c.28 0 .5.22.5.5v2a2 2 0 01-2 2h-2a.5.5 0 010-1h2a1 1 0 001-1v-2c0-.28.22-.5.5-.5z"/>
</svg>

  );
}
export default FullScreenMaximizeIcon;