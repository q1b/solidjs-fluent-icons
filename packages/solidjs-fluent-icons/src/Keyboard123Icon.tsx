
import { splitProps, ComponentProps, JSX } from "solid-js";

function Keyboard123Icon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.88 3.6c.38-.44.76-.58 1.05-.6.3-.01.58.1.78.3.2.19.3.43.28.63-.01.2-.12.44-.49.65a5.8 5.8 0 00-2.2 1.93 2.25 2.25 0 00-.3.92v.12a.5.5 0 00.5.45h3a.5.5 0 000-1H5.18C5.4 6.64 5.9 6.1 7 5.45c.62-.36.95-.88.99-1.45a1.84 1.84 0 00-.59-1.43c-.38-.36-.92-.6-1.52-.57-.61.04-1.22.34-1.76.95a.5.5 0 10.76.65zM2.76 2.07c.15.1.24.26.24.43v5a.5.5 0 01-1 0V3.3l-.78.4a.5.5 0 01-.45-.9l1.5-.75a.5.5 0 01.5.02zm8.28.93c-.33 0-.75.14-1.17.6a.5.5 0 11-.74-.66 2.57 2.57 0 011.9-.94c.64 0 1.2.28 1.57.7a1.5 1.5 0 01-.32 2.3c.27.2.47.42.6.69.26.59.08 1.2-.28 1.61-.36.42-.93.7-1.56.7-.65 0-1.33-.29-1.91-.94a.5.5 0 11.74-.66c.42.46.84.6 1.17.6.34 0 .63-.15.8-.35.17-.2.2-.4.12-.55-.07-.17-.33-.44-1.07-.61a.5.5 0 010-.98c.74-.17 1-.44 1.07-.61.07-.15.05-.35-.12-.55-.17-.2-.46-.35-.8-.35zM2 8.91v5.59c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-8c0-.83-.67-1.5-1.5-1.5h-2.86a2.51 2.51 0 01.35 1h2.51c.28 0 .5.22.5.5v8a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5V8.91a1.5 1.5 0 01-1 0zM5.5 13a.5.5 0 000 1h9a.5.5 0 000-1h-9zm9-4a.75.75 0 100-1.5.75.75 0 000 1.5zM7 11.5A.75.75 0 107 10a.75.75 0 000 1.5zm3.75-.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.26.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
</svg>

  );
}
export default Keyboard123Icon;