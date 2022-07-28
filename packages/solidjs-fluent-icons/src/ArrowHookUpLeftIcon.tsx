
import { splitProps, ComponentProps, JSX } from "solid-js";

function ArrowHookUpLeftIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 15.5c0 .28.22.5.5.5H11c1.64 0 2.9-.62 3.75-1.57A5.16 5.16 0 0016 11c0-1.23-.41-2.48-1.25-3.43A4.85 4.85 0 0011 6H5.7l2.65-2.65a.5.5 0 10-.7-.7l-3.5 3.5a.5.5 0 000 .7l3.5 3.5a.5.5 0 00.7-.7L5.71 7H11c1.36 0 2.35.5 3 1.24.66.74 1 1.74 1 2.76 0 1.02-.34 2.02-1 2.76A3.86 3.86 0 0111 15H6.5a.5.5 0 00-.5.5z"/>
</svg>

  );
}
export default ArrowHookUpLeftIcon;