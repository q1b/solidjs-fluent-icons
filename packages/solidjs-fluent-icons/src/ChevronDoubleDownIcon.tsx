
import { splitProps, ComponentProps, JSX } from "solid-js";

function ChevronDoubleDownIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15.85 8.65c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 01-.78 0L4.15 9.35a.5.5 0 11.7-.7L10 13.8l5.15-5.16c.2-.2.5-.2.7 0zm0-4c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 01-.78 0L4.15 5.35a.5.5 0 11.7-.7L10 9.8l5.15-5.16c.2-.2.5-.2.7 0z"/>
</svg>

  );
}
export default ChevronDoubleDownIcon;