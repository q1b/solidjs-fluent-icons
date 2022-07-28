
import { splitProps, ComponentProps, JSX } from "solid-js";

function ColorLineIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.1 12H4a2 2 0 00-2 2v2c0 1.1.9 2 2 2h12a2 2 0 002-2v-2a2 2 0 00-2-2h-5.3l-.57.57a2.5 2.5 0 01-.57.43H16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2a1 1 0 011-1h.08A1.48 1.48 0 014 12.4v-.04l.04-.17.05-.2zm8.07-9.38a2.26 2.26 0 013.07-.13l.13.12.13.14c.72.85.72 2.1 0 2.95l-.12.13-5.96 6a1.5 1.5 0 01-.55.34l-.16.05-3.08.76a.5.5 0 01-.62-.53l.01-.08.8-3.07c.05-.2.15-.4.28-.57l.1-.11 5.97-6zm2.5.7a1.26 1.26 0 00-1.69-.09l-.1.1-5.97 6a.5.5 0 00-.1.14l-.03.08-.58 2.26 2.27-.56a.5.5 0 00.12-.04l.05-.03.07-.06 5.96-6c.5-.49.5-1.3 0-1.8z"/>
</svg>

  );
}
export default ColorLineIcon;