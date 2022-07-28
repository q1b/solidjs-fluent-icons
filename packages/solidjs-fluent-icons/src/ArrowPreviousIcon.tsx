
import { splitProps, ComponentProps, JSX } from "solid-js";

function ArrowPreviousIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 5a.5.5 0 00-.5.41v9.09a.5.5 0 001 .09V5.5A.5.5 0 006 5zm7.85.15a.5.5 0 00-.63-.06l-.07.06-4.5 4.5a.5.5 0 00-.06.63l.06.07 4.5 4.5a.5.5 0 00.76-.63l-.06-.07L9.71 10l4.14-4.15a.5.5 0 000-.7z"/>
</svg>

  );
}
export default ArrowPreviousIcon;