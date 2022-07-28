
import { splitProps, ComponentProps, JSX } from "solid-js";

function DocumentPageNumberIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.07 12.44a.5.5 0 101 .15l.08-.59h1.24l-.07.44a.5.5 0 101 .15l.08-.59h.6a.5.5 0 000-1h-.46l.22-1.5h.74a.5.5 0 000-1h-.59l.14-.93a.5.5 0 00-1-.14L10.9 8.5H9.66l.14-.93a.5.5 0 00-1-.14L8.66 8.5H8a.5.5 0 000 1h.5L8.28 11H7.5a.5.5 0 100 1h.64l-.07.44zm2.68-2.94l-.22 1.5H9.3l.22-1.5h1.24zM6 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm0 1h8a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z"/>
</svg>

  );
}
export default DocumentPageNumberIcon;