
import { splitProps, ComponentProps, JSX } from "solid-js";

function BlurIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2a8 8 0 105.3 14H10v1a7 7 0 110-14h3.88A7.96 7.96 0 0010 2zm0 2h5.3c.34.3.66.64.95 1H10V4zm6.93 2H10v1h7.42c-.14-.35-.3-.68-.49-1zM10 8h7.75c.08.33.15.66.19 1H10V8zm8 2h-8v1h7.94c.04-.33.06-.66.06-1zm-8 2h7.75c-.09.34-.2.68-.33 1H10v-1zm6.93 2H10v1h6.25a8 8 0 00.68-1z"/>
</svg>

  );
}
export default BlurIcon;