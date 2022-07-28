
import { splitProps, ComponentProps, JSX } from "solid-js";

function ClockPauseIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.8 16A6.5 6.5 0 104 9.2c-.34.1-.68.24-1 .4v-.1a7.5 7.5 0 117.4 7.5c.16-.32.3-.66.4-1zm-5.3 3a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-1-6.5v4a.5.5 0 01-1 0v-4a.5.5 0 011 0zm3 0v4a.5.5 0 01-1 0v-4a.5.5 0 011 0zm3-7.5a.5.5 0 01.5.41V9h2.5a.5.5 0 01.09 1H10.5a.5.5 0 01-.5-.41V5.5c0-.28.22-.5.5-.5z"/>
</svg>

  );
}
export default ClockPauseIcon;