
import { splitProps, ComponentProps, JSX } from "solid-js";

function DocumentLandscapeIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M18 14a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h8.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V14zm-2 1a1 1 0 001-1v-4h-3.5A1.5 1.5 0 0112 8.5V5H4a1 1 0 00-1 1v8a1 1 0 001 1h12zm-3-9.8v3.3c0 .28.22.5.5.5h3.3L13 5.2z"/>
</svg>

  );
}
export default DocumentLandscapeIcon;