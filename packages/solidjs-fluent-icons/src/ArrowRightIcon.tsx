
import { splitProps, ComponentProps, JSX } from "solid-js";

function ArrowRightIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.84 2.63a.5.5 0 00-.68.74L16.33 9H2.5a.5.5 0 000 1h13.83l-6.17 5.63a.5.5 0 00.68.74l6.91-6.32a.75.75 0 000-1.1l-6.91-6.32z"/>
</svg>

  );
}
export default ArrowRightIcon;