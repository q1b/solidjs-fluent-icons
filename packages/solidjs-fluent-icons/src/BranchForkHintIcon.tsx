
import { splitProps, ComponentProps, JSX } from "solid-js";

function BranchForkHintIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 2a3 3 0 00-.5 5.96v3.79a.5.5 0 001 0V11H12a2.5 2.5 0 002.5-2.5v-.54a3 3 0 10-1 0v.54c0 .83-.67 1.5-1.5 1.5H6.5V7.96A3 3 0 006 2zm8 5a2 2 0 110-4 2 2 0 010 4zM6 7a2 2 0 110-4 2 2 0 010 4zm-1.13 6.4a.5.5 0 10-.58-.8 3.02 3.02 0 00-1.12 1.54.5.5 0 10.96.3 1.99 1.99 0 01.74-1.03zm2.9-.8a.5.5 0 10-.57.8 2.02 2.02 0 01.75 1.04.5.5 0 10.95-.3 2.99 2.99 0 00-1.12-1.55zM4.3 16a.5.5 0 00-.88.5 3 3 0 001.38 1.27.5.5 0 10.42-.91 2 2 0 01-.92-.85zm4.37.5a.5.5 0 00-.87-.5 2 2 0 01-.98.88.5.5 0 10.38.92 3 3 0 001.47-1.3z"/>
</svg>

  );
}
export default BranchForkHintIcon;