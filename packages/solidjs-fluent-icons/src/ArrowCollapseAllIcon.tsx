
import { splitProps, ComponentProps, JSX } from "solid-js";

function ArrowCollapseAllIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 4.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zm3.15 2.65c.2-.2.5-.2.7 0l2.5 2.5a.5.5 0 01-.7.7L6 8.71v6.79a.5.5 0 01-1 0V8.7l-1.65 1.65a.5.5 0 01-.7-.7l2.5-2.5zM17.5 8h-7a.5.5 0 010-1h7a.5.5 0 010 1z"/>
</svg>

  );
}
export default ArrowCollapseAllIcon;