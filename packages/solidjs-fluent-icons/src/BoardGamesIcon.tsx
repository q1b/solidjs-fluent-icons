
import { splitProps, ComponentProps, JSX } from "solid-js";

function BoardGamesIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13.5 3a2 2 0 00-1.96 2.4.5.5 0 01-.54.6 2 2 0 00-.92.22 4 4 0 00-.55-.83c.3-.17.62-.29.97-.35V5a3 3 0 116 0v.04a3 3 0 11-1.14 5.9l.22.9a1.75 1.75 0 01-1.7 2.16h-.76a1.75 1.75 0 01-1.7-2.16l.45-1.86a.5.5 0 11.97.24l-.45 1.85c-.12.47.24.93.73.93h.76c.49 0 .84-.45.73-.93l-.45-1.85a.5.5 0 01.76-.54A2 2 0 1015.96 6a.5.5 0 01-.5-.6A2 2 0 0013.5 3zm-9 5a2 2 0 113.6 1.2.5.5 0 00.4.8H9a.5.5 0 010 1H7.9a.5.5 0 00-.5.56 6.86 6.86 0 002.34 4.5c.17.15.26.33.26.49 0 .25-.2.45-.45.45h-6.1a.45.45 0 01-.45-.45c0-.16.09-.34.26-.49a6.86 6.86 0 002.34-4.5.5.5 0 00-.5-.56H4a.5.5 0 010-1h.5a.5.5 0 00.4-.8c-.25-.33-.4-.75-.4-1.2zm2-3a3 3 0 00-2.82 4.03A1.5 1.5 0 004 12h.52a5.76 5.76 0 01-1.9 3.3c-.35.28-.62.73-.62 1.25 0 .8.65 1.45 1.45 1.45h6.1c.8 0 1.45-.65 1.45-1.45 0-.52-.27-.97-.62-1.26A5.76 5.76 0 018.48 12H9a1.5 1.5 0 00.32-2.97A3 3 0 006.5 5z"/>
</svg>

  );
}
export default BoardGamesIcon;