
import { splitProps, ComponentProps, JSX } from "solid-js";

function BranchForkIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9 5a3 3 0 10-3.5 2.96v4.08a3 3 0 101 0V11H12a2.5 2.5 0 002.5-2.5v-.54a3 3 0 10-1 0v.54c0 .83-.67 1.5-1.5 1.5H6.5V7.96A3 3 0 009 5zM6 7a2 2 0 110-4 2 2 0 010 4zm0 10a2 2 0 110-4 2 2 0 010 4zM16 5a2 2 0 11-4 0 2 2 0 014 0z"/>
</svg>

  );
}
export default BranchForkIcon;