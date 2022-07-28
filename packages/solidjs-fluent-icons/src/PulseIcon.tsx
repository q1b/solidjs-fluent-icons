
import { splitProps, ComponentProps, JSX } from "solid-js";

function PulseIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7 3a.5.5 0 01.48.37l3.05 11.3 2.5-8.31a.5.5 0 01.94-.04L15.35 10h2.15a.5.5 0 010 1H15a.5.5 0 01-.47-.32l-.98-2.62-2.57 8.58a.5.5 0 01-.96-.01L6.99 5.37l-1.5 5.27A.5.5 0 015 11H2.5a.5.5 0 010-1h2.12l1.9-6.64A.5.5 0 017 3z"/>
</svg>

  );
}
export default PulseIcon;