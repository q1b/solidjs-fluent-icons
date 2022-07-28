
import { splitProps, ComponentProps, JSX } from "solid-js";

function GasPumpIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 4.5V17h8V4.5c0-.83-.67-1.5-1.5-1.5h-5C5.67 3 5 3.67 5 4.5zm9 11V17h.5a.5.5 0 010 1h-11a.5.5 0 010-1H4V4.5A2.5 2.5 0 016.5 2h5A2.5 2.5 0 0114 4.5v9a1.5 1.5 0 003 0V9.17c0-.33-.1-.64-.3-.9L15.6 6.8a.5.5 0 01.8-.6l1.1 1.47c.32.43.5.96.5 1.5v4.33a2.5 2.5 0 01-4 2zm-8-11v4c0 .28.22.5.5.5h5a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5zM7 5h4v3H7V5z"/>
</svg>

  );
}
export default GasPumpIcon;