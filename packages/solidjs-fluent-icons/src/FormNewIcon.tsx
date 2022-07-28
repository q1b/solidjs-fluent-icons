
import { splitProps, ComponentProps, JSX } from "solid-js";

function FormNewIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h3.6c-.16-.32-.3-.65-.4-1H6a2 2 0 01-2-2V6c0-1.1.9-2 2-2h8a2 2 0 012 2v3.2c.35.1.68.24 1 .4V6a3 3 0 00-3-3H6zm3.5 7h1.84c.9-.63 1.98-1 3.16-1h-5a.5.5 0 000 1zm-4-5a.5.5 0 000 1h9a.5.5 0 000-1h-9zm1 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0-1a.5.5 0 110-1 .5.5 0 010 1zm0 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0-2a.5.5 0 110 1 .5.5 0 010-1zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z"/>
</svg>

  );
}
export default FormNewIcon;