
import { splitProps, ComponentProps, JSX } from "solid-js";

function TextNumberListRotate270Icon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.5 11a.5.5 0 01-.5-.5v-8a.5.5 0 011 0v8a.5.5 0 01-.5.5zm5 0a.5.5 0 01-.5-.5v-8a.5.5 0 011 0v8a.5.5 0 01-.5.5zm5 0a.5.5 0 01-.5-.5v-8a.5.5 0 011 0v8a.5.5 0 01-.5.5zm.5 3.75a.5.5 0 101 0c0-.34.1-.53.18-.63.09-.1.2-.13.3-.13.2.01.52.19.52.76 0 .41-.1.63-.17.72a.42.42 0 01-.07.1.5.5 0 00.46.88h.01l.02-.02.04-.02.1-.08c.09-.07.18-.17.28-.3.18-.28.33-.7.33-1.28 0-1.03-.67-1.73-1.48-1.76-.37-.01-.74.12-1.02.4a1.37 1.37 0 00-1.02-.4c-.8.03-1.48.73-1.48 1.76 0 .59.15 1 .33 1.28a1.4 1.4 0 00.42.4l.01.01h.01a.5.5 0 00.48-.87.42.42 0 01-.08-.1c-.07-.1-.17-.3-.17-.72 0-.57.33-.75.52-.76.1 0 .21.04.3.13.08.1.18.29.18.63zm-6.65 1.6a.5.5 0 01-.7 0h-.01v-.01a1.45 1.45 0 01-.11-.12A2.5 2.5 0 017 14.68c0-.38.1-.79.35-1.11A1.4 1.4 0 018.5 13c.55 0 .93.24 1.2.57a4.2 4.2 0 01.56.96c.16.3.3.54.47.7.08.08.16.14.27.18V13.5a.5.5 0 111 0V16a.5.5 0 01-.5.5c-.62 0-1.08-.2-1.44-.52a3.32 3.32 0 01-.77-1.15 3.18 3.18 0 00-.35-.62.5.5 0 00-.44-.21c-.18 0-.28.07-.35.16a.93.93 0 00-.15.53 1.5 1.5 0 00.35.95v.01c.2.2.2.5 0 .7zm-7.34-1.97A.5.5 0 011.5 14h4a.5.5 0 110 1H2.92c.2.22.38.48.53.78a.5.5 0 11-.9.44 2.96 2.96 0 00-1.15-1.2 2.07 2.07 0 00-.12-.07.5.5 0 01-.27-.56z"/>
</svg>

  );
}
export default TextNumberListRotate270Icon;