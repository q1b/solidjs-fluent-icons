
import { splitProps, ComponentProps, JSX } from "solid-js";

function ArrowCircleUpIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.65 9.15l3-3c.2-.2.5-.2.7 0l3 3a.5.5 0 01-.7.7L10.5 7.71v5.79a.5.5 0 01-1 0V7.7L7.35 9.86a.5.5 0 01-.7-.7zM10 2a8 8 0 100 16 8 8 0 000-16zm-7 8a7 7 0 1114 0 7 7 0 01-14 0z"/>
</svg>

  );
}
export default ArrowCircleUpIcon;