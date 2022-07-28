
import { splitProps, ComponentProps, JSX } from "solid-js";

function CheckboxWarningIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h3.27l.5-1H6a2 2 0 01-2-2V6c0-1.1.9-2 2-2h8a2 2 0 012 2v3.67c.11.13.21.27.3.44l.7 1.41V6a3 3 0 00-3-3H6zm7.85 4.85a.5.5 0 00-.7-.7L8.5 11.79l-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l5-5zm-.25 2.7l-3.5 7A1 1 0 0011 19h7a1 1 0 00.9-1.45l-3.5-7a1 1 0 00-1.8 0zM15 12.5v3a.5.5 0 11-1 0v-3a.5.5 0 111 0zm-.5 5.5a.5.5 0 110-1 .5.5 0 010 1z"/>
</svg>

  );
}
export default CheckboxWarningIcon;