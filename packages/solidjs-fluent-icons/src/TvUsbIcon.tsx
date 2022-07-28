
import { splitProps, ComponentProps, JSX } from "solid-js";

function TvUsbIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 6c0-1.1.9-2 2-2h12a2 2 0 012 2v1.27A2 2 0 0017 7V6a1 1 0 00-1-1H4a1 1 0 00-1 1v7a1 1 0 001 1h8v.18a2 2 0 00.18.82H4a2 2 0 01-2-2V6zm11.5 10.91l-.66-.91H5.5a.5.5 0 000 1h8v-.09zM14 9v2a1 1 0 00-1 1v2.18c0 .2.07.41.19.58l1.31 1.83V18a1 1 0 001 1h1a1 1 0 001-1v-1.4l1.3-1.8a1 1 0 00.2-.6V12a1 1 0 00-1-1V9a1 1 0 00-1-1h-2a1 1 0 00-1 1zm3 2h-2V9h2v2z"/>
</svg>

  );
}
export default TvUsbIcon;