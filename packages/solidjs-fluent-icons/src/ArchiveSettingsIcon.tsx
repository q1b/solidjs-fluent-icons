
import { splitProps, ComponentProps, JSX } from "solid-js";

function ArchiveSettingsIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 4.75C2 3.78 2.78 3 3.75 3h12.5c.97 0 1.75.78 1.75 1.75v1.5c0 .7-.4 1.3-1 1.58V9.6c-.32-.16-.65-.3-1-.4V8H4v6c0 1.1.9 2 2 2h3.2c.1.35.24.68.4 1H6a3 3 0 01-3-3V7.83c-.6-.28-1-.88-1-1.58v-1.5zM3.75 4a.75.75 0 00-.75.75v1.5c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75v-1.5a.75.75 0 00-.75-.75H3.75zm4.75 6h2.84c-.4.28-.77.62-1.08 1H8.5a.5.5 0 010-1zm3.57 1.44a2 2 0 01-1.43 2.48l-.46.12a4.7 4.7 0 000 1.02l.35.08A2 2 0 0112 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 011.43-2.48l.46-.12a4.7 4.7 0 00-.01-1.01l-.35-.09A2 2 0 0117 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.29.13-.57.3-.82.5l.16.55zm2.43 4.06a1 1 0 110-2 1 1 0 010 2z"/>
</svg>

  );
}
export default ArchiveSettingsIcon;