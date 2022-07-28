
import { splitProps, ComponentProps, JSX } from "solid-js";

function MusicNote2Icon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14.7 2.23a1 1 0 011.3.95V13.5a2.5 2.5 0 11-1-2V6.18L8 8.37v7.13a2.5 2.5 0 11-1-2V5.37a1 1 0 01.7-.96l7-2.18zM8 7.32l7-2.19V3.18L8 5.37v1.95zM5.5 14a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.5-.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"/>
</svg>

  );
}
export default MusicNote2Icon;