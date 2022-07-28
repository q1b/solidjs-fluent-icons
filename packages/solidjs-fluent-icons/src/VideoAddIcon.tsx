
import { splitProps, ComponentProps, JSX } from "solid-js";

function VideoAddIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.5 3A2.5 2.5 0 003 5.5v3.1c.32-.16.65-.3 1-.4V5.5C4 4.67 4.67 4 5.5 4h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1.52c-.03.34-.1.68-.19 1h1.71a2.5 2.5 0 002.5-2.5v-1l2.4 1.8a1 1 0 001.6-.8v-7a1 1 0 00-1.6-.8L15 6.5v-1A2.5 2.5 0 0012.5 3h-7zM15 7.75l3-2.25v7l-3-2.25v-2.5zm-5 5.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V13H3.5a.5.5 0 000 1H5v1.5a.5.5 0 001 0V14h1.5a.5.5 0 000-1H6v-1.5z"/>
</svg>

  );
}
export default VideoAddIcon;