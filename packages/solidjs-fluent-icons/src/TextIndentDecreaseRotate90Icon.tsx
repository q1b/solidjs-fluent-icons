
import { splitProps, ComponentProps, JSX } from "solid-js";

function TextIndentDecreaseRotate90Icon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.15 4.85a.5.5 0 00.7-.7l-1.5-1.5a.5.5 0 00-.7 0l-1.5 1.5a.5.5 0 10.7.7L10 3.71l1.15 1.14zM6 7.5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7zm9 0a.5.5 0 00-1 0v7a.5.5 0 001 0v-7zm-5.5 0a.5.5 0 011 0v10a.5.5 0 01-1 0v-10z"/>
</svg>

  );
}
export default TextIndentDecreaseRotate90Icon;