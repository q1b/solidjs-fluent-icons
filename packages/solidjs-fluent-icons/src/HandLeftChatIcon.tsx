
import { splitProps, ComponentProps, JSX } from "solid-js";

function HandLeftChatIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16 6v3.2c-.32-.08-.66-.15-1-.18V6a.5.5 0 00-1 0v3.02c-.34.03-.68.1-1 .19V4.5a.5.5 0 00-1 0v4a.5.5 0 01-1 0v-5a.5.5 0 00-1 0v5a.5.5 0 01-1 0v-4a.5.5 0 00-1 0v6a.5.5 0 01-.85.37h-.01c-.22-.22-.44-.44-.72-.58-.7-.35-2.22-.57-2.4.5l.53.4c.52.4 1.04.78 1.48 1.24l1.33 1.38c.75.79 1.31 1.7 1.85 2.63.07.12.17.23.27.32l.01.01-.3.99a2.16 2.16 0 01-.84-.82c-.5-.87-1.02-1.7-1.72-2.43l-1.32-1.39c-.44-.46-.97-.84-1.49-1.23l-.59-.45a.6.6 0 01-.23-.47c0-.75.54-1.57 1.22-1.79A3.34 3.34 0 017 9.47V4.5a1.5 1.5 0 012.05-1.4 1.5 1.5 0 012.9 0A1.5 1.5 0 0114 4.5v.09A1.5 1.5 0 0116 6zm3 8.5a4.5 4.5 0 01-6.68 3.94l-1.8.54a.4.4 0 01-.5-.5l.54-1.8A4.5 4.5 0 1119 14.5zM12.5 13a.5.5 0 000 1h4a.5.5 0 000-1h-4zm-.5 2.5c0 .28.22.5.5.5h2a.5.5 0 000-1h-2a.5.5 0 00-.5.5z"/>
</svg>

  );
}
export default HandLeftChatIcon;