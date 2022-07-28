
import { splitProps, ComponentProps, JSX } from "solid-js";

function CheckboxCheckedSyncIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 2a3 3 0 00-3 3v8a3 3 0 003 3h4.2c-.08-.32-.15-.66-.18-1H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2h8a2 2 0 012 2v4.02c.34.03.68.1 1 .19V5a3 3 0 00-3-3H5zm7.85 4.85a.5.5 0 00-.7-.7L7.5 10.79 5.85 9.15a.5.5 0 10-.7.7l2 2c.2.2.5.2.7 0l5-5zM10 14.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 01-.5.5H15a.5.5 0 010-1h.47a1.97 1.97 0 00-.94-.25 2 2 0 00-1.44.59.5.5 0 01-.71-.71 3 3 0 013.62-.48V12c0-.28.22-.5.5-.5zm-.88 5.53a3 3 0 01-2.62-.18V17a.5.5 0 01-1 0v-1.5c0-.28.22-.5.5-.5H14a.5.5 0 010 1h-.47a1.97 1.97 0 00.94.25 2 2 0 001.44-.59.5.5 0 01.71.71 3 3 0 01-1 .66z"/>
</svg>

  );
}
export default CheckboxCheckedSyncIcon;