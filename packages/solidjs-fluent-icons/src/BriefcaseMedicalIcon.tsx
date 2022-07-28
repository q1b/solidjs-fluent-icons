
import { splitProps, ComponentProps, JSX } from "solid-js";

function BriefcaseMedicalIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.5 9.5a.5.5 0 00-1 0v2h-2a.5.5 0 000 1h2v2a.5.5 0 001 0v-2h2a.5.5 0 000-1h-2v-2zM7 3.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V6h2a3 3 0 013 3v6a3 3 0 01-3 3H5a3 3 0 01-3-3V9a3 3 0 013-3h2V3.5zm5 .5H8v2h4V4zM5 7a2 2 0 00-2 2v6c0 1.1.9 2 2 2h10a2 2 0 002-2V9a2 2 0 00-2-2H5z"/>
</svg>

  );
}
export default BriefcaseMedicalIcon;