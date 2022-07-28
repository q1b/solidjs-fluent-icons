
import { splitProps, ComponentProps, JSX } from "solid-js";

function PauseSettingsIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.5 2C3.67 2 3 2.67 3 3.5v13c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-13C8 2.67 7.33 2 6.5 2h-2zm0 1h2c.28 0 .5.22.5.5v13a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-13c0-.28.22-.5.5-.5zm9-1c-.83 0-1.5.67-1.5 1.5v6.1c.32-.16.65-.3 1-.4V3.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v5.7c.35.1.68.24 1 .4V3.5c0-.83-.67-1.5-1.5-1.5h-2zm-1.43 9.44a2 2 0 01-1.44 2.48l-.46.12a4.74 4.74 0 00.01 1.01l.35.09A2 2 0 0112 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 011.43-2.48l.46-.12a4.73 4.73 0 00-.01-1.01l-.35-.09A2 2 0 0117 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55zm2.43 4.06a1 1 0 110-2 1 1 0 010 2z"/>
</svg>

  );
}
export default PauseSettingsIcon;