
import { splitProps, ComponentProps, JSX } from "solid-js";

function TextPositionSquareIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 3.5c0-.28.22-.5.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zm0 12c0-.28.22-.5.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zM3.5 6a.5.5 0 000 1h1a.5.5 0 000-1h-1zm11.5.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM3.5 9a.5.5 0 000 1h1a.5.5 0 000-1h-1zm11.5.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM3.5 12a.5.5 0 000 1h1a.5.5 0 000-1h-1zm11.5.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm-7.5-4a2.5 2.5 0 015 0v5a.5.5 0 001 0v-5a3.5 3.5 0 10-7 0v5a.5.5 0 001 0v-5z"/>
</svg>

  );
}
export default TextPositionSquareIcon;