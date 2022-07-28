
import { splitProps, ComponentProps, JSX } from "solid-js";

function HeartIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.5 16.8l6.24-6.3a4.4 4.4 0 00-.02-6.19 4.3 4.3 0 00-6.13-.01l-.6.6-.6-.61a4.3 4.3 0 00-6.13-.02 4.4 4.4 0 00.02 6.2l6.27 6.33c.26.27.69.27.95 0zM11.3 5a3.3 3.3 0 014.71.02 3.4 3.4 0 01.02 4.78l-6 6.06-6.04-6.1a3.4 3.4 0 01-.02-4.78 3.3 3.3 0 014.7.01l.97.97c.2.2.51.2.7 0L11.3 5z"/>
</svg>

  );
}
export default HeartIcon;