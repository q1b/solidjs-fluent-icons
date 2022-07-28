
import { splitProps, ComponentProps, JSX } from "solid-js";

function ReadingModeMobileIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.5 6a.5.5 0 000 1h7a.5.5 0 000-1h-7zM6 8.5c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm.5 1.5a.5.5 0 000 1h4a.5.5 0 000-1h-4zM4 3.5C4 2.67 4.67 2 5.5 2h9c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 16.5v-13zM5.5 3a.5.5 0 00-.5.5v13c0 .28.22.5.5.5h9a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-9z"/>
</svg>

  );
}
export default ReadingModeMobileIcon;