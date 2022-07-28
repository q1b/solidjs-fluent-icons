
import { splitProps, ComponentProps, JSX } from "solid-js";

function DataHistogramIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8 5v11h4V5a1 1 0 00-1-1H9a1 1 0 00-1 1zM7 9V5c0-1.1.9-2 2-2h2a2 2 0 012 2v1h2a2 2 0 012 2v8.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5V11c0-1.1.9-2 2-2h2zm0 7v-6H5a1 1 0 00-1 1v5h3zm6 0h3V8a1 1 0 00-1-1h-2v9z"/>
</svg>

  );
}
export default DataHistogramIcon;