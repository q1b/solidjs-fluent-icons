
import { splitProps, ComponentProps, JSX } from "solid-js";

function MapIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17.73 3.06a.5.5 0 01.27.44v10a.5.5 0 01-.24.43l-5 3a.5.5 0 01-.5 0l-4.51-2.5a.46.46 0 00-.5 0l-4.5 2.5A.5.5 0 012 16.5V7a.5.5 0 01.21-.41l5-3.5a.5.5 0 01.58 0l4.71 3.3 4.71-3.3a.5.5 0 01.52-.03zM3 7.26v8.39l3.75-2.08c.08-.05.16-.1.25-.12V4.46l-4 2.8zm5.25 6.3l3.75 2.1v-8.4l-4-2.8v8.99c.08.03.17.07.25.12zM13 15.62l4-2.4V4.47l-4 2.8v8.35z"/>
</svg>

  );
}
export default MapIcon;