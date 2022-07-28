
import { splitProps, ComponentProps, JSX } from "solid-js";

function DocumentQueueMultipleIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12.38 3.75l1.11 1.12L16 7.37v-.66c0-.46-.18-.9-.5-1.23l-2.4-2.44A3.5 3.5 0 0010.6 2H5.75C4.83 2 4.07 2.72 4 3.62 4.48 3.23 5.1 3 5.75 3h4.85c.67 0 1.31.27 1.78.75zM2.5 13c.28 0 .5.22.5.5v1A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-1a.5.5 0 011 0v1a3.5 3.5 0 01-3.5 3.5h-9A3.5 3.5 0 012 14.5v-1c0-.28.22-.5.5-.5zM6 7.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM6.5 9a.5.5 0 000 1h2a.5.5 0 000-1h-2zM6 11.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm10-2v-.02c-.01-.45-.2-.88-.51-1.2l-3.77-3.77A1.75 1.75 0 0010.5 4H5.74C4.78 4 4 4.78 4 5.75v8.5c0 .97.78 1.75 1.75 1.75h8.5c.97 0 1.75-.78 1.75-1.75V9.51zM5 5.76c0-.41.34-.75.75-.75H10v3.5c0 .83.67 1.5 1.5 1.5H15v4.25c0 .41-.34.75-.75.75h-8.5a.75.75 0 01-.75-.75v-8.5zm6-.54l.01.01 3.77 3.77.01.01H11.5a.5.5 0 01-.5-.5V5.2z"/>
</svg>

  );
}
export default DocumentQueueMultipleIcon;