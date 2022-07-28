
import { splitProps, ComponentProps, JSX } from "solid-js";

function PhoneLinkSetupIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h3.26a5.5 5.5 0 01-.66-1H7a1 1 0 01-1-1V4a1 1 0 011-1h6a1 1 0 011 1v5.02a5.57 5.57 0 011 0V4a2 2 0 00-2-2H7zm5.07 9.44a2 2 0 01-1.44 2.48l-.46.12a4.73 4.73 0 00.01 1.01l.35.09A2 2 0 0112 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 011.43-2.48l.46-.12a4.73 4.73 0 00-.01-1.01l-.35-.09A2 2 0 0117 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55zm2.43 4.06a1 1 0 110-2 1 1 0 010 2z"/>
</svg>

  );
}
export default PhoneLinkSetupIcon;