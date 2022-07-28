
import { splitProps, ComponentProps, JSX } from "solid-js";

function DesignIdeasIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9 4c-.76 0-1.48.21-2.08.58a3.3 3.3 0 00-.34-.96A5 5 0 0114 8h2.5c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 019 15.5V13c-.72 0-1.4-.15-2.02-.42L7 11.5v-.04c.59.35 1.27.54 2 .54V9.5c0-.83.67-1.5 1.5-1.5H13a4 4 0 00-4-4zm4.9 5a5 5 0 01-3.9 3.9v2.6c0 .28.22.5.5.5h6a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-2.6zm-1.03 0H10.5a.5.5 0 00-.5.5v2.37A4 4 0 0012.87 9zM4.58 2.13a.5.5 0 01.12.6l-.01.08c0 .07.01.19.16.34l.2.18.16.16c.13.12.27.27.4.45.25.38.39.86.39 1.56 0 .85-.32 1.58-.8 2.03l.05.07c.29.34.45.79.55 1.23.2.87.2 1.92.2 2.64v.03c0 2.79-.38 4.37-.8 5.27-.2.46-.43.75-.62.93a1.48 1.48 0 01-.4.26S4.09 18 4 18c-.07 0-.19-.04-.19-.04a.75.75 0 01-.13-.06c-.07-.05-.16-.1-.26-.2-.2-.18-.41-.47-.62-.93-.42-.9-.8-2.48-.8-5.27v-.03c0-.72 0-1.77.2-2.64a3.02 3.02 0 01.6-1.3C2.33 7.08 2 6.35 2 5.5a4.73 4.73 0 01.69-2.1A4.07 4.07 0 013.93 2.1l.03-.02h.01a.5.5 0 01.61.04zM4 7c.39 0 1-.43 1-1.5 0-.55-.1-.82-.23-1-.06-.1-.14-.2-.25-.3l-.12-.1-.25-.25a1.67 1.67 0 01-.28-.36 2.5 2.5 0 00-.34.44A3.73 3.73 0 003 5.5C3 6.57 3.62 7 4 7zm-.48 1.23c-.14.18-.26.45-.35.82C3 9.8 3 10.75 3 11.5c0 2.71.37 4.13.7 4.85.11.24.22.4.3.5.08-.1.19-.26.3-.5.33-.72.7-2.14.7-4.85 0-.76 0-1.7-.17-2.45-.1-.37-.2-.64-.35-.82A.57.57 0 004 8a.57.57 0 00-.48.23z"/>
</svg>

  );
}
export default DesignIdeasIcon;