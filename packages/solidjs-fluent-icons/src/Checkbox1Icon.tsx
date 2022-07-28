
import { splitProps, ComponentProps, JSX } from "solid-js";

function Checkbox1Icon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h8c.77 0 1.47-.29 2-.76v-.83c-.22.08-.44.1-.67.08A2 2 0 0114 16H6a2 2 0 01-2-2V6c0-1.1.9-2 2-2h8a2 2 0 012 2v5.75l.6-.45c.12-.1.26-.16.4-.21V6a3 3 0 00-3-3H6zm7.85 4.85a.5.5 0 00-.7-.7L8.5 11.79l-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l5-5zm3.87 4.2a.5.5 0 01.28.45v5a.5.5 0 01-1 0v-4l-1.2.9a.5.5 0 01-.6-.8l2-1.5a.5.5 0 01.52-.05z"/>
</svg>

  );
}
export default Checkbox1Icon;