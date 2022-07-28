
import { splitProps, ComponentProps, JSX } from "solid-js";

function ChessIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 3a1 1 0 011-1h.5c.39 0 .74.15 1 .38a1.5 1.5 0 011-.38h1c.38 0 .73.15 1 .38a1.5 1.5 0 011-.38h.5a1 1 0 011 1v2.5a2.5 2.5 0 01-1.95 2.44c.28 4.04 1.7 6.58 2.19 7.35.16.25.26.55.26.88v.33c0 .83-.67 1.5-1.5 1.5h-5.48c.22-.3.37-.63.44-1H17a.5.5 0 00.5-.5v-.33c0-.11-.03-.23-.1-.34-.58-.9-2.16-3.78-2.38-8.3a.5.5 0 01.5-.53A1.5 1.5 0 0017 5.5V3h-.5a.5.5 0 00-.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 00-.5-.5H11v2.5c0 .82.66 1.49 1.48 1.5a.5.5 0 01.5.52 18.32 18.32 0 01-1.76 7.2 2.82 2.82 0 00-.2-.2 4.2 4.2 0 01-.55-.55 17.38 17.38 0 001.48-6.03A2.5 2.5 0 0110 5.5V3zM4.5 8a2 2 0 113.6 1.2.5.5 0 00.4.8H9a.5.5 0 010 1H7.9a.5.5 0 00-.5.56 6.86 6.86 0 002.34 4.5c.17.15.26.33.26.49 0 .25-.2.45-.45.45h-6.1a.45.45 0 01-.45-.45c0-.16.09-.34.26-.49a6.86 6.86 0 002.34-4.5.5.5 0 00-.5-.56H4a.5.5 0 010-1h.5a.5.5 0 00.4-.8c-.25-.33-.4-.75-.4-1.2zm2-3a3 3 0 00-2.82 4.03A1.5 1.5 0 004 12h.52a5.76 5.76 0 01-1.9 3.3c-.35.28-.62.73-.62 1.25 0 .8.65 1.45 1.45 1.45h6.1c.8 0 1.45-.65 1.45-1.45 0-.52-.27-.97-.62-1.26A5.76 5.76 0 018.48 12H9a1.5 1.5 0 00.32-2.97A3 3 0 006.5 5z"/>
</svg>

  );
}
export default ChessIcon;