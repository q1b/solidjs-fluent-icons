
import { splitProps, ComponentProps, JSX } from "solid-js";

function TextBulletListSquareShieldIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16 8.4V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h5.33c.13.36.3.7.48 1H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2h10a2 2 0 012 2v4.27a6.33 6.33 0 01-1-.86zM6.75 8a.75.75 0 100-1.5.75.75 0 000 1.5zm.75 2.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 3a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9 7.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm0 3c0-.28.22-.5.5-.5h1.72a1.6 1.6 0 00-1.14 1H9.5a.5.5 0 01-.5-.5zm.5 3.5h.5v-1h-.5a.5.5 0 000 1zm5.94-4.76a5.7 5.7 0 003.06 1.72c.27.04.5.26.5.54V14c0 3.47-3.18 4.73-3.87 4.96a.4.4 0 01-.26 0C14.18 18.73 11 17.46 11 14v-2.5c0-.28.23-.5.5-.54a5.7 5.7 0 003.06-1.72.62.62 0 01.88 0z"/>
</svg>

  );
}
export default TextBulletListSquareShieldIcon;