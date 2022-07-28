
import { splitProps, ComponentProps, JSX } from "solid-js";

function NumberRowIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 6.5a.5.5 0 011 0v7a.5.5 0 01-1 0v-7zM4 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h3a2 2 0 002-2V5a2 2 0 00-2-2H4zM3 5a1 1 0 011-1h3a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V5zm10.5 1a.5.5 0 000 1H15v2.5h-1.5a.5.5 0 00-.5.5v3.5c0 .28.22.5.5.5h2a.5.5 0 000-1H14v-2.5h1.5a.5.5 0 00.5-.5V6.5a.5.5 0 00-.5-.5h-2zM13 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h3a2 2 0 002-2V5a2 2 0 00-2-2h-3zm-1 2a1 1 0 011-1h3a1 1 0 011 1v10a1 1 0 01-1 1h-3a1 1 0 01-1-1V5z"/>
</svg>

  );
}
export default NumberRowIcon;