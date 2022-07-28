
import { splitProps, ComponentProps, JSX } from "solid-js";

function ShareAndroidIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12 5.5a2.5 2.5 0 11.53 1.54L7.92 9.35a2.5 2.5 0 010 1.3l4.61 2.3a2.5 2.5 0 11-.45.9l-4.61-2.3a2.5 2.5 0 110-3.1l4.61-2.3A2.5 2.5 0 0112 5.5zM14.5 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM4 10a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"/>
</svg>

  );
}
export default ShareAndroidIcon;