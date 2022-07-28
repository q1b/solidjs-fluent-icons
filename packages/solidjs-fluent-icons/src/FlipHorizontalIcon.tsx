
import { splitProps, ComponentProps, JSX } from "solid-js";

function FlipHorizontalIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17.92 15.77a.5.5 0 01-.42.23h-6a.5.5 0 01-.5-.5v-13a.5.5 0 01.95-.2l6 13a.5.5 0 01-.03.47zM12 4.77V15h4.72L12 4.78zM2.5 16a.5.5 0 01-.45-.71l6-13A.5.5 0 019 2.5v13a.5.5 0 01-.5.5h-6z"/>
</svg>

  );
}
export default FlipHorizontalIcon;