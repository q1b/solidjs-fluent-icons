
import { splitProps, ComponentProps, JSX } from "solid-js";

function ArrowRedoIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15 2.5a.5.5 0 011 0v4.9a.6.6 0 01-.6.6h-4.9a.5.5 0 010-1h3.6l-3.48-3.02a4 4 0 10-5.24 6.04l8.17 7.1a.5.5 0 11-.66.76l-8.17-7.1a5 5 0 116.56-7.55L15 6.46V2.5z"/>
</svg>

  );
}
export default ArrowRedoIcon;