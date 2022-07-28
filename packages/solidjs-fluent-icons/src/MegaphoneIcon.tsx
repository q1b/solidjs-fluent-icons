
import { splitProps, ComponentProps, JSX } from "solid-js";

function MegaphoneIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M18 4.8c0-.98-.93-1.7-1.89-1.45l-13 3.47A1.5 1.5 0 002 8.27v2.5c0 .65.41 1.23 1.03 1.43l1.97.66v.89a3.25 3.25 0 006.27 1.2l4.76 1.59A1.5 1.5 0 0018 15.1V4.81zm-7.68 9.83A2.25 2.25 0 016 13.75v-.56l4.32 1.44zm6.05-10.31a.5.5 0 01.63.48v10.31a.5.5 0 01-.66.48l-13-4.34a.5.5 0 01-.34-.47V8.27a.5.5 0 01.37-.48l13-3.47z"/>
</svg>

  );
}
export default MegaphoneIcon;