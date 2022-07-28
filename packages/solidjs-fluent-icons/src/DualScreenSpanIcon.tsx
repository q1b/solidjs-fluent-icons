
import { splitProps, ComponentProps, JSX } from "solid-js";

function DualScreenSpanIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 6c0-1.1.9-2 2-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2-1a1 1 0 00-1 1v8a1 1 0 001 1h5.5v-3.5h1V15H16a1 1 0 001-1V6a1 1 0 00-1-1h-5.5v3.5h-1V5H4zm2.85 3.35a.5.5 0 10-.7-.7l-2 2a.5.5 0 000 .7l2 2a.5.5 0 00.7-.7L5.71 10.5h8.58l-1.14 1.15a.5.5 0 00.7.7l2-2a.5.5 0 000-.7l-2-2a.5.5 0 00-.7.7l1.14 1.15H5.71l1.14-1.15z"/>
</svg>

  );
}
export default DualScreenSpanIcon;