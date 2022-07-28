
import { splitProps, ComponentProps, JSX } from "solid-js";

function TagLockIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14 7a1 1 0 100-2 1 1 0 000 2zm-2.87-5a2 2 0 00-1.43.58L3.02 9.25a2 2 0 000 2.83l4.95 4.95a2 2 0 002.03.49V16.4a1 1 0 01-1.32-.08l-4.95-4.95a1 1 0 010-1.41l6.68-6.67a1 1 0 01.71-.29l4.9.03a1 1 0 01.99 1v4.95a1 1 0 01-.29.7l-.14.15a3 3 0 01.6.82l.25-.25A2 2 0 0018 8.98V4.03a2 2 0 00-1.99-2L11.12 2zm1.37 10v1H12a1 1 0 00-1 1v4a1 1 0 001 1h5a1 1 0 001-1v-4a1 1 0 00-1-1h-.5v-1a2 2 0 10-4 0zm1 1v-1a1 1 0 112 0v1h-2zm1 2.25a.75.75 0 110 1.5.75.75 0 010-1.5z"/>
</svg>

  );
}
export default TagLockIcon;