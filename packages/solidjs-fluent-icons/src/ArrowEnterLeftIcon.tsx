
import { splitProps, ComponentProps, JSX } from "solid-js";

function ArrowEnterLeftIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.76 12l3.33 3.14a.5.5 0 01-.68.72l-4.25-4a.5.5 0 010-.72l4.25-4a.5.5 0 11.68.72L3.76 11H15a2 2 0 002-2V4.5a.5.5 0 011 0V9a3 3 0 01-3 3H3.76z"/>
</svg>

  );
}
export default ArrowEnterLeftIcon;