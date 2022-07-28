
import { splitProps, ComponentProps, JSX } from "solid-js";

function XrayIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 5.5a.5.5 0 00-1 0V6H7.5a.5.5 0 000 1H9v1H6.5a.5.5 0 000 1H9v1H6.5a.5.5 0 000 1H9v1H7.5a1.5 1.5 0 101.41 1h1.18a1.5 1.5 0 101.41-1H10v-1h2.5a.5.5 0 000-1H10V9h2.5a.5.5 0 000-1H10V7h1.5a.5.5 0 000-1H10v-.5zm1.5 7.5a.5.5 0 110 1 .5.5 0 010-1zm-4.5.5a.5.5 0 111 0 .5.5 0 01-1 0zM5.5 2A2.5 2.5 0 003 4.5v11A2.5 2.5 0 005.5 18h8a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0013.5 2h-8zM4 4.5C4 3.67 4.67 3 5.5 3h8c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 014 15.5v-11z"/>
</svg>

  );
}
export default XrayIcon;