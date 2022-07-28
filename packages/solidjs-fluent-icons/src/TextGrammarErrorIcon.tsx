
import { splitProps, ComponentProps, JSX } from "solid-js";

function TextGrammarErrorIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.5 5a.5.5 0 000 1h15a.5.5 0 000-1h-15zm0 3a.5.5 0 000 1h15a.5.5 0 000-1h-15zM9 14.5c0-.17 0-.34.02-.5H2.5a.5.5 0 000 1h6.52a5.57 5.57 0 01-.02-.5zm.6-2.5c.18-.36.4-.7.66-1H2.5a.5.5 0 000 1h7.1zm9.4 2.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM14.5 12a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5zm0 5.13a.62.62 0 100-1.25.62.62 0 000 1.24z"/>
</svg>

  );
}
export default TextGrammarErrorIcon;