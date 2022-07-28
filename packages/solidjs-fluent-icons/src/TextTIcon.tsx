
import { splitProps, ComponentProps, JSX } from "solid-js";

function TextTIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 3.5c0-.28.22-.5.5-.5h10c.28 0 .5.22.5.5v2a.5.5 0 01-1 0V4h-4v12h1.5a.5.5 0 010 1h-4a.5.5 0 010-1H9V4H5v1.5a.5.5 0 01-1 0v-2z"/>
</svg>

  );
}
export default TextTIcon;