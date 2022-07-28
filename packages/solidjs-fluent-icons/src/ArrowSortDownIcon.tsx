
import { splitProps, ComponentProps, JSX } from "solid-js";

function ArrowSortDownIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 15.29l2.65-2.64a.5.5 0 01.7.7L9.9 16.82a.5.5 0 01-.74.03h-.01l-3.5-3.5a.5.5 0 11.71-.7L9 15.29V3.5a.5.5 0 011 0v11.79z"/>
</svg>

  );
}
export default ArrowSortDownIcon;