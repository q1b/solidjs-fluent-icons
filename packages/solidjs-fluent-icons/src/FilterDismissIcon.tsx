
import { splitProps, ComponentProps, JSX } from "solid-js";

function FilterDismissIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.2 7H2.42a.5.5 0 00.09 1h7.1c-.16-.32-.3-.65-.4-1zm2.8 8.5a.5.5 0 00-.5-.5H6.41a.5.5 0 00.09 1h5.09a.5.5 0 00.41-.5zm1.5-4.5H4.41a.5.5 0 00.09 1h9.09a.5.5 0 00-.09-1zm1-1a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm1.85-6.35c.2.2.2.5 0 .7L15.21 5.5l1.14 1.15a.5.5 0 01-.7.7L14.5 6.21l-1.15 1.14a.5.5 0 01-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 01.7-.7l1.15 1.14 1.15-1.14c.2-.2.5-.2.7 0z"/>
</svg>

  );
}
export default FilterDismissIcon;