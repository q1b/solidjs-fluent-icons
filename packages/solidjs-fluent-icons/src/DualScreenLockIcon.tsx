
import { splitProps, ComponentProps, JSX } from "solid-js";

function DualScreenLockIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14.5 3v1H14a1 1 0 00-1 1v4a1 1 0 001 1h5a1 1 0 001-1V5a1 1 0 00-1-1h-.5V3a2 2 0 10-4 0zm1 1V3a1 1 0 112 0v1h-2zm1 2.25a.75.75 0 110 1.5.75.75 0 010-1.5zM4 6h8v1h-1.5v10H16a1 1 0 001-1v-5h1v5a2 2 0 01-2 2H4a2 2 0 01-2-2V8c0-1.1.9-2 2-2zm2 9.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm6.5-.5a.5.5 0 000 1h1a.5.5 0 000-1h-1zm-3-8H4a1 1 0 00-1 1v8a1 1 0 001 1h5.5V7z"/>
</svg>

  );
}
export default DualScreenLockIcon;