
import { splitProps, ComponentProps, JSX } from "solid-js";

function PhotoFilterIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 8a6 6 0 004.26 5.74 6 6 0 107.48-7.48A6 6 0 002 8zm6-5a5 5 0 014.6 3.03L12 6a6 6 0 00-5.97 6.6A5 5 0 018 3zm9 9a5 5 0 01-9.6 1.97L8 14a6 6 0 005.97-6.6A5 5 0 0117 12z"/>
</svg>

  );
}
export default PhotoFilterIcon;