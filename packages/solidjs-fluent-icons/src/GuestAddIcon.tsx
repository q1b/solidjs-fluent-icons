
import { splitProps, ComponentProps, JSX } from "solid-js";

function GuestAddIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.09 4H5.5a.5.5 0 00-.5.5v12c0 .28.22.5.5.5h4.1c.18.36.4.7.66 1H5.5A1.5 1.5 0 014 16.5v-12C4 3.67 4.67 3 5.5 3h1.59c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v4.7c-.32-.08-.66-.15-1-.18V4.5a.5.5 0 00-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 01-1.41-1zm.66 7h2.5c-.25.3-.47.64-.65 1H7.75a.25.25 0 00-.18.07.15.15 0 00-.04.13c.04.45.18.88.5 1.2.2.2.5.4 1 .5a5.56 5.56 0 00-.01 1.02 3.06 3.06 0 01-1.7-.81 2.93 2.93 0 01-.79-1.8C6.45 11.54 7.1 11 7.75 11zM8 3.5c0 .28.22.5.5.5h3a.5.5 0 000-1h-3a.5.5 0 00-.5.5zM9 8a1 1 0 112 0 1 1 0 01-2 0zm1-2a2 2 0 100 4 2 2 0 000-4zm9 8.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z"/>
</svg>

  );
}
export default GuestAddIcon;