
import { splitProps, ComponentProps, JSX } from "solid-js";

function ArrowDownIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16.87 10.84a.5.5 0 10-.74-.68l-5.63 6.17V2.5a.5.5 0 00-1 0v13.83l-5.63-6.17a.5.5 0 00-.74.68l6.31 6.91a.75.75 0 001.11 0l6.32-6.91z"/>
</svg>

  );
}
export default ArrowDownIcon;