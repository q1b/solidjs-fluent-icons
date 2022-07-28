
import { splitProps, ComponentProps, JSX } from "solid-js";

function RatingMatureIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.92 7.24A.5.5 0 007 7.5v5a.5.5 0 101 0V9.24l1.58 2.53a.5.5 0 00.84 0L12 9.24v3.26a.5.5 0 101 0v-5a.5.5 0 00-.92-.26L10 10.56 7.92 7.24zM6 3a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3H6zM4 6c0-1.1.9-2 2-2h8a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"/>
</svg>

  );
}
export default RatingMatureIcon;