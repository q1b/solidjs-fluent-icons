
import { splitProps, ComponentProps, JSX } from "solid-js";

function DocumentCopyIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 4c0-1.1.9-2 2-2h3.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V14a2 2 0 01-2 2H8a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v10a1 1 0 001 1h7a1 1 0 001-1V8h-3.5A1.5 1.5 0 0111 6.5V3H8zm4 .2v3.3c0 .28.22.5.5.5h3.3L12 3.2zM4 5a1 1 0 011-1v10a3 3 0 003 3h7a1 1 0 01-1 1H7.94A3.94 3.94 0 014 14.06V5z"/>
</svg>

  );
}
export default DocumentCopyIcon;