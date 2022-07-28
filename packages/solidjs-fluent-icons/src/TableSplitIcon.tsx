
import { splitProps, ComponentProps, JSX } from "solid-js";

function TableSplitIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16.5 2c.28 0 .5.22.5.5V4a2 2 0 01-2 2H5a2 2 0 01-2-2V2.5a.5.5 0 011 0V4a1 1 0 001 1h2V2.5a.5.5 0 011 0V5h4V2.5a.5.5 0 011 0V5h2a1 1 0 001-1V2.5c0-.28.22-.5.5-.5zm0 16a.5.5 0 00.5-.5V16a2 2 0 00-2-2H5a2 2 0 00-2 2v1.5a.5.5 0 001 0V16a1 1 0 011-1h2v2.5a.5.5 0 001 0V15h4v2.5a.5.5 0 001 0V15h2a1 1 0 011 1v1.5c0 .28.22.5.5.5zm-14-8.5h15a.5.5 0 110 1h-15a.5.5 0 010-1z"/>
</svg>

  );
}
export default TableSplitIcon;