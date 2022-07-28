
import { splitProps, ComponentProps, JSX } from "solid-js";

function FlipVerticalIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15.77 2.08c.14.1.23.25.23.42v6a.5.5 0 01-.5.5h-13a.5.5 0 01-.2-.95l13-6a.5.5 0 01.47.03zM4.77 8H15V3.28L4.78 8zM16 17.5a.5.5 0 01-.71.45l-13-6A.5.5 0 012.5 11h13c.28 0 .5.22.5.5v6z"/>
</svg>

  );
}
export default FlipVerticalIcon;