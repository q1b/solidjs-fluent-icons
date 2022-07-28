
import { splitProps, ComponentProps, JSX } from "solid-js";

function PresenceBlockedIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M20 10a10 10 0 10-20 0 10 10 0 0020 0zm-2 0a8 8 0 01-12.9 6.32L16.31 5.09A7.97 7.97 0 0118 10zm-3.1-6.32L3.69 14.91A8 8 0 0114.91 3.68z"/>
</svg>

  );
}
export default PresenceBlockedIcon;