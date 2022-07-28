
import { splitProps, ComponentProps, JSX } from "solid-js";

function CursorHoverOffIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.85 2.15a.5.5 0 10-.7.7L3.39 4.1A2 2 0 002 6v7c0 1.1.9 2 2 2h5v-1H4a1 1 0 01-1-1V6a1 1 0 011-1h.3l5.7 5.7v6.8a.5.5 0 00.91.29l1.57-2.25 2.78.43 1.89 1.88a.5.5 0 00.7-.7l-15-15zm11.22 12.62l-1.74-.26a.5.5 0 00-.49.2l-.84 1.2v-4.2l3.07 3.06zm2.84.01A2 2 0 0018 13V6a2 2 0 00-2-2H6.12l1 1H16a1 1 0 011 1v7a1 1 0 01-.89 1l.8.78z"/>
</svg>

  );
}
export default CursorHoverOffIcon;