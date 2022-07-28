
import { splitProps, ComponentProps, JSX } from "solid-js";

function LineHorizontal5ErrorIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.5 3a.5.5 0 000 1h15a.5.5 0 000-1h-15zm0 6a.5.5 0 000 1h7.76c.31-.38.67-.72 1.08-1H2.5zm0 3h6.7c-.08.32-.15.66-.18 1H2.5a.5.5 0 010-1zm0 3h6.7c.1.35.24.68.4 1H2.5a.5.5 0 010-1zm0-9a.5.5 0 000 1h15a.5.5 0 000-1h-15zM19 13.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM14.5 11a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5zm0 5.13a.62.62 0 100-1.25.62.62 0 000 1.24z"/>
</svg>

  );
}
export default LineHorizontal5ErrorIcon;