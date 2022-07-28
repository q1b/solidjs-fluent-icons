
import { splitProps, ComponentProps, JSX } from "solid-js";

function MegaphoneOffIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.85 2.15a.5.5 0 10-.7.7L5.48 6.2l-2.37.63A1.5 1.5 0 002 8.27v2.5c0 .65.41 1.23 1.03 1.43l1.97.66v.89a3.25 3.25 0 006.27 1.2l4.46 1.49 1.42 1.41a.5.5 0 00.7-.7l-15-15zm11.3 12.7l-10.8-3.6a.5.5 0 01-.35-.47V8.27a.5.5 0 01.37-.48L6.3 7l7.85 7.86zm-3.83-.22A2.25 2.25 0 016 13.75v-.56l4.32 1.44zM17 4.8v10.08l.86.86c.1-.19.14-.4.14-.63V4.81c0-1-.93-1.71-1.89-1.46L7.71 5.6l.82.82 7.84-2.1a.5.5 0 01.63.5z"/>
</svg>

  );
}
export default MegaphoneOffIcon;