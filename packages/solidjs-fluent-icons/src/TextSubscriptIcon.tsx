
import { splitProps, ComponentProps, JSX } from "solid-js";

function TextSubscriptIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13.54 4.12c.2.18.23.5.05.7L9.16 10l4.08 4.77c-.18.29-.34.63-.42 1.04L8.5 10.77l-4.34 5.06a.5.5 0 11-.75-.66L7.84 10 3.41 4.83a.5.5 0 11.75-.66L8.5 9.23l4.33-5.06a.5.5 0 01.7-.05zM15.58 12c-.46 0-.83.42-.83.86a.5.5 0 01-1 0 1.87 1.87 0 013.42-1.04c.36.55.37 1.27-.04 1.98-.21.36-.5.63-.79.86l-.42.3-.06.05-.34.24c-.32.24-.55.47-.67.75h2.1a.5.5 0 110 1H14.3a.54.54 0 01-.05 0 .5.5 0 01-.5-.5c0-1.04.6-1.62 1.17-2.05l.36-.26.06-.04.38-.28c.24-.19.42-.37.55-.58.25-.43.19-.73.07-.92a.89.89 0 00-.76-.37z"/>
</svg>

  );
}
export default TextSubscriptIcon;