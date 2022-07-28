
import { splitProps, ComponentProps, JSX } from "solid-js";

function ArrowCircleRightIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.85 13.35l3-3a.5.5 0 000-.7l-3-3a.5.5 0 00-.7.7l2.14 2.15H6.5a.5.5 0 000 1h5.8l-2.15 2.15a.5.5 0 00.7.7zM18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8 7a7 7 0 100-14 7 7 0 000 14z"/>
</svg>

  );
}
export default ArrowCircleRightIcon;