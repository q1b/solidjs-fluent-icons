
import { splitProps, ComponentProps, JSX } from "solid-js";

function AddSubtractCircleIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11 12.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm-3-7a.5.5 0 00-1 0v1H6a.5.5 0 100 1h1v1a.5.5 0 001 0v-1h1a.5.5 0 100-1H8v-1zM10 18a8 8 0 100-16 8 8 0 000 16zm0-1a6.97 6.97 0 01-4.58-1.7l9.87-9.88A7 7 0 0110 17zm-5.3-2.42a7 7 0 019.87-9.87l-9.86 9.87z"/>
</svg>

  );
}
export default AddSubtractCircleIcon;