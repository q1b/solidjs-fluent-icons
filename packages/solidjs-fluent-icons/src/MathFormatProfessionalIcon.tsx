
import { splitProps, ComponentProps, JSX } from "solid-js";

function MathFormatProfessionalIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.85 4.35c.2-.19.25-.24.35-.3a.9.9 0 01.92.17c.07.04.13.1.2.21l.1.17.01.03.14.22.3.54v.03l-1.72 1.73a.5.5 0 00.7.7l1.56-1.55.17.28.18.29.11.18c.1.16.23.36.38.5a1.6 1.6 0 002 .28c.26-.13.4-.28.59-.46l.01-.02a.5.5 0 10-.7-.7 1.28 1.28 0 01-.43.33c-.13.1-.46.17-.77-.13a8.08 8.08 0 01-.81-1.28l1.71-1.72a.5.5 0 00-.7-.7L13.6 4.68a7.66 7.66 0 01-.2-.36 3.42 3.42 0 01-.11-.2l-.02-.02a5.28 5.28 0 00-.12-.2c-.1-.17-.25-.36-.47-.5a1.9 1.9 0 00-1.91-.25c-.28.14-.43.29-.62.48l-.01.02a.5.5 0 00.7.7zM8.31 7c.46 0 .88.23 1.18.54.3.32.5.75.5 1.24.07.77-.2 1.4-.67 1.86-.45.46-1.07.76-1.7.96-1.17.37-2.52.44-3.42.41a3.54 3.54 0 00-.2 1.6 1.46 1.46 0 00.52.94c.27.27.6.35 1.1.46 1.34.16 2.64-.61 3.46-1.72a.5.5 0 01.8.59c-.95 1.3-2.6 2.35-4.4 2.12a.5.5 0 01-.04-.01H5.4c-.46-.1-1.08-.23-1.58-.73-.42-.38-.7-.87-.8-1.49a4.56 4.56 0 01.25-2.13l.13-.35a.5.5 0 01.02-.04v-.02c.07-.2.44-1.23 1.2-2.23.75-1 1.96-2.05 3.69-2zm-3.72 4.02c.8 0 1.84-.1 2.72-.37.55-.18 1-.41 1.3-.71A1.32 1.32 0 009 8.8c0-.2-.1-.41-.24-.57A.67.67 0 008.3 8h-.02c-1.26-.04-2.2.71-2.87 1.6-.38.5-.65 1.04-.82 1.42z"/>
</svg>

  );
}
export default MathFormatProfessionalIcon;