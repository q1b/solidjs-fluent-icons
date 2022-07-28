
import { splitProps, ComponentProps, JSX } from "solid-js";

function DraftsIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13.25 2.82l-9.61 9.6-.12.13a2 2 0 00-.4.76l-1.1 4.06-.02.08a.5.5 0 00.63.53l4.06-1.1.16-.06a2 2 0 00.73-.46l9.6-9.6.13-.15a2.78 2.78 0 00-4.06-3.8zm-8.9 10.31l8.04-8.04 2.52 2.52-8.04 8.04-.1.09-.1.07a1 1 0 01-.25.1l-3.2.87.87-3.2.04-.13a1 1 0 01.22-.32zm12.12-9.6l.11.11c.59.7.55 1.75-.1 2.4l-.87.87-2.52-2.53.86-.86.12-.1c.7-.59 1.75-.55 2.4.1zM11.65 3H2.5a.5.5 0 000 1h8.15l1-1zm-3 3H2.5a.5.5 0 000 1h5.15l1-1zm-4 4l1-1H2.5a.5.5 0 000 1h2.15z"/>
</svg>

  );
}
export default DraftsIcon;