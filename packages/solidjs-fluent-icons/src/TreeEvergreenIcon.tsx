
import { splitProps, ComponentProps, JSX } from "solid-js";

function TreeEvergreenIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.62 2.21a1 1 0 00-1.24 0l-3.3 2.61a1.5 1.5 0 00-.06 2.32l-1.47 1.2a1.5 1.5 0 00.51 2.6l-1.58 1.48A1.49 1.49 0 004.49 15H8v1.75c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25V15h3.5c1.36 0 2-1.65 1.02-2.58l-1.58-1.48a1.5 1.5 0 00.5-2.6L14 7.14a1.5 1.5 0 00-.06-2.32l-3.31-2.6zM11 15v1.75c0 .14-.11.25-.25.25h-1.5a.25.25 0 01-.25-.25V15h2zM10 3l3.3 2.6a.5.5 0 01-.28.9.5.5 0 00-.3.89l2.1 1.72a.5.5 0 01-.33.89h-.75a.5.5 0 00-.35.87l2.45 2.28c.32.3.1.85-.34.85h-11a.49.49 0 01-.34-.85l2.44-2.29a.5.5 0 00-.34-.86h-.75a.5.5 0 01-.32-.89l2.1-1.72a.5.5 0 00-.3-.89.5.5 0 01-.3-.9L10 3z"/>
</svg>

  );
}
export default TreeEvergreenIcon;