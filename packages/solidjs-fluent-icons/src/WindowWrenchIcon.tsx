
import { splitProps, ComponentProps, JSX } from "solid-js";

function WindowWrenchIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v2.62a1.38 1.38 0 00-1-.59V7H4v7c0 1.1.9 2 2 2h2.5c-.23.3-.38.65-.45 1H6a3 3 0 01-3-3V6zm3-2a2 2 0 00-2 2h12a2 2 0 00-2-2H6zm10.24 5.36a.39.39 0 00-.35-.34 3.51 3.51 0 00-3.72 4.68l-2.73 2.73a1.5 1.5 0 000 2.13 1.5 1.5 0 002.13 0l2.73-2.73a3.52 3.52 0 004.68-3.72c-.05-.37-.48-.47-.75-.21l-.97.97a1.52 1.52 0 01-1.26.43 1.5 1.5 0 01-.87-2.56l.97-.97a.49.49 0 00.14-.4z"/>
</svg>

  );
}
export default WindowWrenchIcon;