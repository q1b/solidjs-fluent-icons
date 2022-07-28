
import { splitProps, ComponentProps, JSX } from "solid-js";

function ChannelSubtractIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.2 4.52a2.02 2.02 0 011.06.13C4.53 4.25 5 4 5.5 4h9c.83 0 1.5.67 1.5 1.5v3.7c.35.1.68.24 1 .4V5.5A2.5 2.5 0 0014.5 3h-9a2.5 2.5 0 00-2.3 1.52zM9.6 17c-.16-.32-.3-.65-.4-1H5.5A1.5 1.5 0 014 14.5V8.44a2 2 0 01-1 0v6.06A2.5 2.5 0 005.5 17h4.1zm0-5c.18-.36.4-.7.66-1H7.5a.5.5 0 000 1h2.1zM3 5.63a1 1 0 011 0 1 1 0 11-1 0zM7 8.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM14.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm2-4h-4a.5.5 0 010-1h4a.5.5 0 010 1z"/>
</svg>

  );
}
export default ChannelSubtractIcon;