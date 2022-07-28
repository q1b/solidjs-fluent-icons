
import { splitProps, ComponentProps, JSX } from "solid-js";

function KeyboardLayoutSplitIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 5.5C2 4.67 2.67 4 3.5 4h13c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 012 13.5v-8zM3.5 5a.5.5 0 00-.5.5v8c0 .28.22.5.5.5h13a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-13zM5 12.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM4.75 8a.75.75 0 100-1.5.75.75 0 000 1.5zm3.75-.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM5.25 10.5a.75.75 0 100-1.5.75.75 0 000 1.5zM9 9.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.5 12a.5.5 0 010 1h-3a.5.5 0 010-1h3zm0-4.75a.75.75 0 101.5 0 .75.75 0 00-1.5 0zM12.25 8a.75.75 0 110-1.5.75.75 0 010 1.5zM14 9.75a.75.75 0 101.5 0 .75.75 0 00-1.5 0zm-2.25.75a.75.75 0 110-1.5.75.75 0 010 1.5z"/>
</svg>

  );
}
export default KeyboardLayoutSplitIcon;