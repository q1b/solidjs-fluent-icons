
import { splitProps, ComponentProps, JSX } from "solid-js";

function DeleteOffIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.3 4L2.14 2.85a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7l-2-2A3 3 0 0112.27 18H7.73a3 3 0 01-2.98-2.66L3.55 5H2.5a.5.5 0 010-1h.8zm10.99 11L12 12.7V14a.5.5 0 01-1 0v-2.3l-2-2V14a.5.5 0 01-1 0V8.7L4.6 5.3l1.14 9.93A2 2 0 007.73 17h4.54a2 2 0 001.99-1.77l.03-.24zM11 8.87l1 1V8a.5.5 0 00-1 0v.88zM15.44 5l-.86 7.46.9.9.97-8.36h1.05a.5.5 0 000-1h-5a2.5 2.5 0 00-5 0H6.12l1 1h8.32zM11.5 4h-3a1.5 1.5 0 113 0z"/>
</svg>

  );
}
export default DeleteOffIcon;