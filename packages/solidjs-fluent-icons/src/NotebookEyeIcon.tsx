
import { splitProps, ComponentProps, JSX } from "solid-js";

function NotebookEyeIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.5 5a.5.5 0 00-.5.5v2c0 .28.22.5.5.5h7a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-7zM6 7V6h6v1H6zM3 4c0-1.1.9-2 2-2h8a2 2 0 012 2v12a2 2 0 01-2 2H9.88c.28-.32.5-.65.69-.98V17H13a1 1 0 001-1V4a1 1 0 00-1-1H5a1 1 0 00-1 1v7.2c-.35.1-.69.22-1 .37V4zm13 2h.5c.28 0 .5.22.5.5V8a.5.5 0 01-.5.5H16V6zm.5 3.5H16V12h.5a.5.5 0 00.5-.5V10a.5.5 0 00-.5-.5zM16 13h.5c.28 0 .5.22.5.5V15a.5.5 0 01-.5.5H16V13zM1 15.5C1 14.32 2.74 12 5.5 12s4.5 2.3 4.5 3.5c0 1.18-1.74 3.5-4.5 3.5S1 16.7 1 15.5zm3.11 2.08a2.5 2.5 0 102.78-4.16 2.5 2.5 0 00-2.78 4.16zm2.64-1.25a1.5 1.5 0 10-2.5-1.66 1.5 1.5 0 002.5 1.66z"/>
</svg>

  );
}
export default NotebookEyeIcon;