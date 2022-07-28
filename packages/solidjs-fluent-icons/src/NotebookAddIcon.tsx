
import { splitProps, ComponentProps, JSX } from "solid-js";

function NotebookAddIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 4c0-1.1.9-2 2-2h8a2 2 0 012 2v12a2 2 0 01-2 2H9.74c.26-.3.48-.64.66-1H13a1 1 0 001-1V4a1 1 0 00-1-1H5a1 1 0 00-1 1v5.2c-.35.1-.68.24-1 .4V4zm2.5.5A.5.5 0 005 5v2c0 .28.22.5.5.5h7A.5.5 0 0013 7V5a.5.5 0 00-.5-.5h-7zm.5 2v-1h6v1H6zM16.5 6H16v2.5h.5A.5.5 0 0017 8V6.5a.5.5 0 00-.5-.5zm0 3.5H16V12h.5a.5.5 0 00.5-.5V10a.5.5 0 00-.5-.5zm0 3.5H16v2.5h.5a.5.5 0 00.5-.5v-1.5a.5.5 0 00-.5-.5zm-11 6a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 010 1H6v1.5a.5.5 0 01-1 0V15H3.5a.5.5 0 010-1H5v-1.5c0-.28.22-.5.5-.5z"/>
</svg>

  );
}
export default NotebookAddIcon;