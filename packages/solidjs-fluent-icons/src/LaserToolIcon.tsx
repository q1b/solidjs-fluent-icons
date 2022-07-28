
import { splitProps, ComponentProps, JSX } from "solid-js";

function LaserToolIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 2.5a.5.5 0 00-1 0V5a2 2 0 001 1.73v.77C4 8.33 4.67 9 5.5 9h4v3.5a.5.5 0 001 0V9h4c.83 0 1.5-.67 1.5-1.5v-.77A2 2 0 0017 5V2.5a.5.5 0 00-1 0V5a1 1 0 01-1 1H5a1 1 0 01-1-1V2.5zM5 7h10v.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V7z"/>
  <path d="M5.5 14a.5.5 0 000 1H7a.5.5 0 000-1H5.5z"/>
  <path d="M12.5 14.5c0-.28.22-.5.5-.5h1.5a.5.5 0 010 1H13a.5.5 0 01-.5-.5z"/>
  <path d="M10 15a.5.5 0 100-1 .5.5 0 000 1z"/>
  <path d="M10 16c.28 0 .5.22.5.5v2a.5.5 0 01-1 0v-2c0-.28.22-.5.5-.5z"/>
  <path d="M8.85 15.85a.5.5 0 00-.7-.7l-1.5 1.5a.5.5 0 00.7.7l1.5-1.5z"/>
  <path d="M11.15 15.15a.5.5 0 000 .7l1.5 1.5a.5.5 0 00.7-.7l-1.5-1.5a.5.5 0 00-.7 0z"/>
</svg>

  );
}
export default LaserToolIcon;