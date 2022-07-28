
import { splitProps, ComponentProps, JSX } from "solid-js";

function NotebookLightningIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 2a2 2 0 00-2 2v5.6c.32-.16.65-.3 1-.4V4a1 1 0 011-1h8a1 1 0 011 1v12a1 1 0 01-1 1h-2.6c-.18.36-.4.7-.66 1H13a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 3.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-2zM6 6v1h6V6H6zm10 0h.5c.28 0 .5.22.5.5V8a.5.5 0 01-.5.5H16V6zm0 3.5h.5c.28 0 .5.22.5.5v1.5a.5.5 0 01-.5.5H16V9.5zm0 3.5h.5c.28 0 .5.22.5.5V15a.5.5 0 01-.5.5H16V13zm-6 1.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-5.63.84c.16 0 .28.15.24.3l-.24 1.01c-.06.27.25.46.44.27l2.56-2.53c.27-.26.1-.72-.27-.72h-.23a.25.25 0 01-.24-.33l.3-.97C7 12.19 6.88 12 6.7 12H4.86c-.1 0-.2.07-.24.17l-1.1 2.78c-.07.19.06.39.24.39h.6z"/>
</svg>

  );
}
export default NotebookLightningIcon;