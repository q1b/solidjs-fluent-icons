
import { splitProps, ComponentProps, JSX } from "solid-js";

function ChevronCircleUpIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 10a7 7 0 1014 0 7 7 0 00-14 0zm7 8a8 8 0 110-16 8 8 0 010 16zm-3.15-6.15a.5.5 0 01-.7-.7l3.5-3.5a.5.5 0 01.7 0l3.5 3.5a.5.5 0 01-.7.7L10 8.71l-3.15 3.14z"/>
</svg>

  );
}
export default ChevronCircleUpIcon;