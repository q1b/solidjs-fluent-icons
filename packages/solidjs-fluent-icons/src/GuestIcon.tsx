
import { splitProps, ComponentProps, JSX } from "solid-js";

function GuestIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.09 4H5.5a.5.5 0 00-.5.5v12c0 .28.22.5.5.5h9a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 01-1.41-1zm5.82-1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 16.5v-12C4 3.67 4.67 3 5.5 3h1.59c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1zM8 3.5c0 .28.22.5.5.5h3a.5.5 0 000-1h-3a.5.5 0 00-.5.5zM9 8a1 1 0 112 0 1 1 0 01-2 0zm1-2a2 2 0 100 4 2 2 0 000-4zm-2.47 6.2c0-.05 0-.09.04-.13.04-.04.1-.07.18-.07h4.5c.07 0 .14.03.18.07.03.04.05.08.04.13-.04.45-.18.88-.5 1.2-.3.32-.88.6-1.97.6-1.1 0-1.66-.28-1.98-.6a1.94 1.94 0 01-.5-1.2zm.22-1.2c-.66 0-1.3.55-1.22 1.3.06.56.24 1.26.79 1.8.55.57 1.41.9 2.68.9 1.27 0 2.13-.33 2.68-.9.55-.54.73-1.24.79-1.8.08-.75-.56-1.3-1.22-1.3h-4.5z"/>
</svg>

  );
}
export default GuestIcon;