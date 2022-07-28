
import { splitProps, ComponentProps, JSX } from "solid-js";

function TextItalicIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16 3a.5.5 0 010 1h-3.16L8.23 16h3.27a.5.5 0 010 1H4a.5.5 0 010-1h3.16l4.61-12H8.5a.5.5 0 010-1H16z"/>
</svg>

  );
}
export default TextItalicIcon;