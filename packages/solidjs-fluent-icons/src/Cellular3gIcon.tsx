
import { splitProps, ComponentProps, JSX } from "solid-js";

function Cellular3gIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.03 3c-.32 0-.74.14-1.16.6a.5.5 0 11-.74-.66A2.57 2.57 0 014.03 2c.64 0 1.2.28 1.57.7A1.5 1.5 0 015.28 5c.27.2.47.42.6.69.26.59.08 1.2-.28 1.61-.36.42-.93.7-1.56.7-.65 0-1.33-.29-1.91-.94a.5.5 0 01.74-.66c.42.46.84.6 1.17.6.34 0 .63-.15.8-.35.17-.2.2-.4.12-.55-.07-.17-.33-.44-1.07-.61a.5.5 0 010-.98c.74-.17 1-.44 1.07-.61.07-.15.05-.35-.12-.55-.17-.2-.46-.35-.8-.35zM16.5 5a.5.5 0 01.5.41v11.1a.5.5 0 01-.99.08V5.5c0-.28.22-.5.5-.5zm-9 6a.5.5 0 01.5.41v5.09a.5.5 0 01-.99.09V11.5c0-.28.22-.5.5-.5zm-3 2a.5.5 0 01.5.41v3.09a.5.5 0 01-1 .09V13.5c0-.28.22-.5.5-.5zm6-4a.5.5 0 01.5.4v7.1a.5.5 0 01-1 .09V9.5c0-.28.22-.5.5-.5zm3-2a.5.5 0 01.5.41v9.09a.5.5 0 01-1 .09V7.5c0-.27.22-.5.5-.5zM9.25 3h.25s.13 0 .28.06c.17.07.36.18.48.42a.5.5 0 00.89-.46C10.62 2 9.53 2 9.5 2h-.25C8.01 2 7 3 7 4.25v1.5a2.25 2.25 0 004.5 0v-.5a.5.5 0 00-.5-.5H9.5a.5.5 0 100 1h1a1.25 1.25 0 01-2.5 0v-1.5C8 3.56 8.56 3 9.25 3z"/>
</svg>

  );
}
export default Cellular3gIcon;