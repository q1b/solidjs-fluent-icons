
import { splitProps, ComponentProps, JSX } from "solid-js";

function ArrowCurveUpRightIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14.15 6.85a.5.5 0 00.7-.7l-4-4a.5.5 0 00-.7 0l-4 4a.5.5 0 10.7.7L10 3.71V10c0 1.96-.25 3.38-.76 4.47a5.96 5.96 0 01-2.5 2.6.5.5 0 00.52.86 6.95 6.95 0 002.88-3.03c.6-1.28.86-2.86.86-4.9V3.7l3.15 3.15z"/>
</svg>

  );
}
export default ArrowCurveUpRightIcon;