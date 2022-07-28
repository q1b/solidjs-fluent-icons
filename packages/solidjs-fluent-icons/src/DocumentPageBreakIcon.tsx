
import { splitProps, ComponentProps, JSX } from "solid-js";

function DocumentPageBreakIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16 2.5V6c0 .83-.68 1.5-1.5 1.5H5.49A1.5 1.5 0 014 6V2.5a.5.5 0 111 0V6c0 .28.21.5.49.5h9.01A.5.5 0 0015 6V2.5c0-.28.23-.5.5-.5s.5.22.5.5zm-13 7a.5.5 0 000 1h1.2a.5.5 0 000-1H3zm3.2 0a.5.5 0 000 1h1.2a.5.5 0 000-1H6.2zm2.7.5c0-.28.22-.5.5-.5h1.2a.5.5 0 010 1H9.4a.5.5 0 01-.5-.5zm3.7-.5a.5.5 0 000 1h1.2a.5.5 0 000-1h-1.2zm2.7.5c0-.28.22-.5.5-.5H17a.5.5 0 010 1h-1.2a.5.5 0 01-.5-.5zm.7 4v3.5a.5.5 0 01-.5.5.5.5 0 01-.5-.5V14a.5.5 0 00-.5-.5H5.49a.5.5 0 00-.5.5v3.5a.5.5 0 01-.5.5.5.5 0 01-.49-.5V14c0-.83.67-1.5 1.49-1.5h9.01c.82 0 1.5.67 1.5 1.5z"/>
</svg>

  );
}
export default DocumentPageBreakIcon;