
import { splitProps, ComponentProps, JSX } from "solid-js";

function KeyboardLayoutFloatIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 11.5c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM11.5 7a.75.75 0 100-1.5.75.75 0 000 1.5zm3.75-.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM5.5 7a.75.75 0 100-1.5.75.75 0 000 1.5zm2.25 1.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM10 9.5A.75.75 0 1010 8a.75.75 0 000 1.5zm3.76-.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM8.5 7a.75.75 0 100-1.5.75.75 0 000 1.5zM2 4.5C2 3.67 2.67 3 3.5 3h13c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5H11a1 1 0 11-2 0H3.5A1.5 1.5 0 012 12.5v-8zM3.5 13h13a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-13a.5.5 0 00-.5.5v8c0 .28.22.5.5.5zM2 16.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5z"/>
</svg>

  );
}
export default KeyboardLayoutFloatIcon;