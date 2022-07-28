
import { splitProps, ComponentProps, JSX } from "solid-js";

function CommentMultipleIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.5 2a2.5 2.5 0 00-2.46 2.04A2.5 2.5 0 002 6.5v7A2.5 2.5 0 004.5 16H5v1.03a1 1 0 001.58.81L9.16 16h4.34a2.5 2.5 0 002.5-2.5v-.55a2.5 2.5 0 002-2.45v-5A3.5 3.5 0 0014.5 2h-8zm7 13H8.84L6 17.03V15H4.5A1.5 1.5 0 013 13.5v-7C3 5.67 3.67 5 4.5 5h9c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5zm0-11H5.09c.2-.58.76-1 1.41-1h8A2.5 2.5 0 0117 5.5v5c0 .65-.42 1.2-1 1.41V6.5A2.5 2.5 0 0013.5 4z"/>
</svg>

  );
}
export default CommentMultipleIcon;