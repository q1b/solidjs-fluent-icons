
import { splitProps, ComponentProps, JSX } from "solid-js";

function BorderBottomIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.5 3a.5.5 0 000 1h3a.5.5 0 000-1h-3zM5.54 4.05a2 2 0 00-1.5 1.55.5.5 0 01-.59.4.5.5 0 01-.38-.66 3 3 0 012.34-2.29.5.5 0 01.6.4.5.5 0 01-.47.6zM3.07 14.66a.5.5 0 01.38-.66.5.5 0 01.6.46A2 2 0 006 16h8a2 2 0 001.95-1.6.5.5 0 01.6-.4.5.5 0 01.38.66A3 3 0 0114 17H6a3 3 0 01-2.93-2.34zM14.6 3.06a3 3 0 012.36 2.36.5.5 0 01-.4.58.5.5 0 01-.6-.46 2 2 0 00-1.55-1.5.5.5 0 01-.4-.59.5.5 0 01.6-.4zM16.5 12a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM3 11.5a.5.5 0 001 0v-3a.5.5 0 00-1 0v3z"/>
</svg>

  );
}
export default BorderBottomIcon;