
import { splitProps, ComponentProps, JSX } from "solid-js";

function ArrowMoveIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.35 2.15a.5.5 0 00-.7 0l-2.5 2.5a.5.5 0 10.7.7L9.5 3.71V7.5a.5.5 0 001 0V3.7l1.65 1.65a.5.5 0 00.7-.7l-2.5-2.5zm-8.2 7.5a.5.5 0 000 .7l2.5 2.5a.5.5 0 00.7-.7L3.71 10.5H7.5a.5.5 0 000-1H3.7l1.65-1.65a.5.5 0 10-.7-.7l-2.5 2.5zM10 18a.5.5 0 01-.35-.15l-2.5-2.5a.5.5 0 01.7-.7l1.65 1.64V12.5a.5.5 0 011 0v3.8l1.65-1.65a.5.5 0 01.7.7l-2.5 2.5A.5.5 0 0110 18zm7.85-7.65a.5.5 0 000-.7l-2.5-2.5a.5.5 0 00-.7.7l1.64 1.65H12.5a.5.5 0 000 1h3.8l-1.65 1.65a.5.5 0 00.7.7l2.5-2.5z"/>
</svg>

  );
}
export default ArrowMoveIcon;