
import { splitProps, ComponentProps, JSX } from "solid-js";

function ArrowMaximizeVerticalIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.65 1.4c.2-.2.5-.2.7 0l2.12 2.13a.5.5 0 01-.7.7L10.5 2.96V7.5a.5.5 0 01-1 0V2.96L8.23 4.23a.5.5 0 11-.7-.7L9.65 1.4zM4 10c0-.28.22-.5.5-.5h11a.5.5 0 010 1h-11A.5.5 0 014 10zm6.5 7.04V12.5a.5.5 0 00-1 0v4.54l-1.27-1.27a.5.5 0 10-.7.7l2.12 2.13c.2.2.5.2.7 0l2.12-2.12a.5.5 0 00-.7-.71l-1.27 1.27z"/>
</svg>

  );
}
export default ArrowMaximizeVerticalIcon;