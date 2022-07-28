
import { splitProps, ComponentProps, JSX } from "solid-js";

function CaretLeftIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.37 14.98A1 1 0 0013 14.2V5.8a1 1 0 00-1.63-.78L6.65 8.83a1.5 1.5 0 000 2.34l4.72 3.81zM12 5.8v8.4L7.28 10.4a.5.5 0 010-.78L12 5.8z"/>
</svg>

  );
}
export default CaretLeftIcon;