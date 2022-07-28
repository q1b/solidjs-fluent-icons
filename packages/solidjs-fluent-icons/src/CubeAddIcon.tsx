
import { splitProps, ComponentProps, JSX } from "solid-js";

function CubeAddIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.07 16.59c.13.05.26.1.4.12.16.38.36.73.6 1.06a3.5 3.5 0 01-1.37-.25l-5.76-2.3a1.5 1.5 0 01-.94-1.4V6.18c0-.62.37-1.17.94-1.4l5.76-2.3a3.5 3.5 0 012.6 0l5.76 2.3c.57.23.94.78.94 1.4v4.08a5.5 5.5 0 00-1-.66V6.18a.5.5 0 00-.31-.47l-5.76-2.3a2.5 2.5 0 00-1.86 0l-5.76 2.3a.5.5 0 00-.31.47v7.64c0 .2.12.4.31.47l5.76 2.3zM5.7 6.04a.5.5 0 10-.4.92l4.2 1.87v3.38a5.5 5.5 0 011-1.48v-1.9l4.2-1.87a.5.5 0 10-.4-.92L10 7.95l-4.3-1.9zM17 18.24a4.5 4.5 0 11-5-7.48 4.5 4.5 0 015 7.48zm-2.15-6.1a.5.5 0 00-.85.36V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5a.5.5 0 00-.15-.35z"/>
</svg>

  );
}
export default CubeAddIcon;