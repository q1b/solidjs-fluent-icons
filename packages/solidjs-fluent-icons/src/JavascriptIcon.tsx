
import { splitProps, ComponentProps, JSX } from "solid-js";

function JavascriptIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.5 9.5c0-.83.67-1.5 1.5-1.5h1.5a.5.5 0 010 1H13a.5.5 0 00-.5.5v1c0 .28.22.5.5.5h.5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5H12a.5.5 0 010-1h1.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H13a1.5 1.5 0 01-1.5-1.5v-1zm-.5-1a.5.5 0 00-1 0v5a.5.5 0 01-.5.5h-1a.5.5 0 000 1h1c.83 0 1.5-.67 1.5-1.5v-5zM3 6v8a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3H6a3 3 0 00-3 3zm3-2h8a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V6c0-1.1.9-2 2-2z"/>
</svg>

  );
}
export default JavascriptIcon;