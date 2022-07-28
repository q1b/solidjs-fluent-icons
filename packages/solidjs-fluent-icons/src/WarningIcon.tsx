
import { splitProps, ComponentProps, JSX } from "solid-js";

function WarningIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.56 3.26a.5.5 0 01.88 0l6.5 12a.5.5 0 01-.44.74h-13a.5.5 0 01-.44-.74l6.5-12zm1.76-.47a1.5 1.5 0 00-2.64 0l-6.5 12A1.5 1.5 0 003.5 17h13a1.5 1.5 0 001.32-2.21l-6.5-12zM10.5 7.5a.5.5 0 10-1 0v4a.5.5 0 001 0v-4zm.25 6.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
</svg>

  );
}
export default WarningIcon;