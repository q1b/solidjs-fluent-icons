
import { splitProps, ComponentProps, JSX } from "solid-js";

function DocumentSearchIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 12c0 .92-.31 1.78-.84 2.45l3.7 3.7a.5.5 0 11-.72.7l-3.69-3.69A4 4 0 1110 12zm-4 3a3 3 0 100-6 3 3 0 000 6zM5.5 3a.5.5 0 00-.5.5v3.6c-.35.07-.68.18-1 .32V3.5C4 2.67 4.67 2 5.5 2h5.09c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06v9.09c0 .83-.67 1.5-1.5 1.5h-.59a1.5 1.5 0 00-.35-.56l-.44-.44h1.38a.5.5 0 00.5-.5V8h-3.5A1.5 1.5 0 0110 6.5V3H5.5zm5.5.2v3.3c0 .28.22.5.5.5h3.3L11 3.2z"/>
</svg>

  );
}
export default DocumentSearchIcon;