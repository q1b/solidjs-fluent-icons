
import { splitProps, ComponentProps, JSX } from "solid-js";

function StreamOutputIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16.15 2.15c.2-.2.5-.2.7 0l3 2.99a.5.5 0 010 .72l-3 3a.5.5 0 01-.7-.71L18.29 6H13.5C11.6 6 10 7.6 10 9.5v1C10 13 8 15 5.5 15h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3C7.4 14 9 12.4 9 10.5v-1C9 7 11 5 13.5 5h4.8l-2.15-2.15a.5.5 0 010-.7zM2.5 12H5a2 2 0 002-2V9c0-3.3 2.7-6 6-6h.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H13C9.1 2 6 5.1 6 9v1c0 .6-.4 1-1 1H2.5c-.3 0-.5.2-.5.5s.2.5.5.5zm12.6-4H14a2 2 0 00-2 2v1c0 3.3-2.7 6-6 6h-.5c-.3 0-.5.2-.5.5s.2.5.5.5H6c3.9 0 7-3.1 7-7v-1c0-.6.4-1 1-1h1.1c-.1-.3-.1-.7 0-1z"/>
</svg>

  );
}
export default StreamOutputIcon;