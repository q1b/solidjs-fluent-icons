
import { splitProps, ComponentProps, JSX } from "solid-js";

function ArrowSortUpIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9 4.71L6.35 7.35a.5.5 0 11-.7-.7L9.1 3.18a.5.5 0 01.74-.03h.01l3.5 3.5a.5.5 0 11-.71.7L10 4.71V16.5a.5.5 0 01-1 0V4.71z"/>
</svg>

  );
}
export default ArrowSortUpIcon;