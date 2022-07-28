
import { splitProps, ComponentProps, JSX } from "solid-js";

function KeyboardShiftIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.86 2.53c.6-.7 1.68-.7 2.28 0l6.62 7.8a1 1 0 01-.76 1.65h-3V17a1 1 0 01-1 1H7a1 1 0 01-1-1v-5.02H3a1 1 0 01-.76-1.65l6.62-7.8zm1.52.65a.5.5 0 00-.76 0L3 10.98h3.5c.28 0 .5.23.5.5V17h6v-5.52c0-.27.22-.5.5-.5H17l-6.62-7.8z"/>
</svg>

  );
}
export default KeyboardShiftIcon;