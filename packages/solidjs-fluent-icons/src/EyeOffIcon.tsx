
import { splitProps, ComponentProps, JSX } from "solid-js";

function EyeOffIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.85 2.15a.5.5 0 10-.7.7l3.5 3.5a8.1 8.1 0 00-3.37 5.05.5.5 0 10.98.2 7.09 7.09 0 013.1-4.53l1.6 1.59a3.5 3.5 0 104.88 4.89l4.3 4.3a.5.5 0 00.71-.7l-15-15zm9.27 10.68a2.5 2.5 0 11-3.45-3.45l3.45 3.45zm-2-4.83l3.38 3.38A3.5 3.5 0 0010.12 8zM10 6c-.57 0-1.13.07-1.67.21l-.8-.8A7.65 7.65 0 0110 5c3.7 0 6.94 2.67 7.72 6.4a.5.5 0 01-.98.2A6.97 6.97 0 0010 6z"/>
</svg>

  );
}
export default EyeOffIcon;