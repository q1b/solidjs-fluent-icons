
import { splitProps, ComponentProps, JSX } from "solid-js";

function DocumentPageBottomRightIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12.93 10.56a.5.5 0 10-1-.15l-.08.59h-1.24l.07-.44a.5.5 0 10-1-.15L9.6 11H9a.5.5 0 000 1h.46l-.22 1.5H8.5a.5.5 0 000 1h.59l-.14.93a.5.5 0 001 .14l.15-1.07h1.24l-.14.93a.5.5 0 001 .14l.15-1.07H13a.5.5 0 000-1h-.5l.22-1.5h.78a.5.5 0 000-1h-.64l.07-.44zm-2.68 2.94l.22-1.5h1.24l-.22 1.5h-1.24zM14 18a2 2 0 002-2V4a2 2 0 00-2-2H6a2 2 0 00-2 2v12c0 1.1.9 2 2 2h8zm0-1H6a1 1 0 01-1-1V4a1 1 0 011-1h8a1 1 0 011 1v12a1 1 0 01-1 1z"/>
</svg>

  );
}
export default DocumentPageBottomRightIcon;