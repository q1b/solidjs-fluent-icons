
import { splitProps, ComponentProps, JSX } from "solid-js";

function TextBulletListRotate270Icon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.5 16a1 1 0 110 2 1 1 0 010-2zm5.5 0a1 1 0 110 2 1 1 0 010-2zm6.5 1a1 1 0 10-2 0 1 1 0 002 0zM5 14.5a.5.5 0 01-1 0v-12a.5.5 0 011 0v12zm5 .5a.5.5 0 00.5-.5v-12a.5.5 0 00-1 0v12c0 .28.22.5.5.5zm6-.5a.5.5 0 01-1 0v-12a.5.5 0 011 0v12z"/>
</svg>

  );
}
export default TextBulletListRotate270Icon;