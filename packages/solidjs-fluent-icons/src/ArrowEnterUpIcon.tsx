
import { splitProps, ComponentProps, JSX } from "solid-js";

function ArrowEnterUpIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.86 2.16a.5.5 0 00-.72 0l-4 4.25a.5.5 0 00.72.68L8 3.76V15a3 3 0 003 3h4.5a.5.5 0 000-1H11a2 2 0 01-2-2V3.76l3.14 3.33a.5.5 0 00.72-.68l-4-4.25z"/>
</svg>

  );
}
export default ArrowEnterUpIcon;