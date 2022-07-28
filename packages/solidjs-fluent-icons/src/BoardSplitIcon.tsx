
import { splitProps, ComponentProps, JSX } from "solid-js";

function BoardSplitIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm1 4v4c0 1.1.9 2 2 2h5v-6H4zm7-1V4H6a2 2 0 00-2 2v3h7zm1 7h2a2 2 0 002-2v-1h-4v3zm4-9V6a2 2 0 00-2-2h-2v3h4zm0 1h-4v4h4V8z"/>
</svg>

  );
}
export default BoardSplitIcon;