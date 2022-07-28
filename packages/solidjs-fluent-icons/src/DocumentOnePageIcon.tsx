
import { splitProps, ComponentProps, JSX } from "solid-js";

function DocumentOnePageIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4c0-1.1.9-2 2-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1H6zm7 3.5a.5.5 0 01-.41.5H7.5a.5.5 0 01-.09-1h5.09c.28 0 .5.22.5.5zm0 3.5a.5.5 0 01-.41.5H7.5a.5.5 0 01-.09-1h5.09c.28 0 .5.22.5.5zm0 3.5a.5.5 0 01-.41.5H7.5a.5.5 0 01-.09-1h5.09c.28 0 .5.22.5.5z"/>
</svg>

  );
}
export default DocumentOnePageIcon;