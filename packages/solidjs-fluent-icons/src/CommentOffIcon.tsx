
import { splitProps, ComponentProps, JSX } from "solid-js";

function CommentOffIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.85 2.15a.5.5 0 10-.7.7l.76.77C2.35 4.09 2 4.79 2 5.57v6.7a2.58 2.58 0 002.6 2.57h.6v2.17c0 .22.07.42.2.6a1 1 0 001.4.2l4.01-2.97h3.33l3 3.01a.5.5 0 00.71-.7l-2.3-2.31L3.82 3.12l-.97-.97zm10.29 11.7h-2.66L6.21 17H6.2v-3.16H4.6c-.9 0-1.6-.71-1.6-1.56V5.57c0-.5.24-.95.62-1.24l9.52 9.51zM17 12.27c0 .69-.46 1.28-1.11 1.49l.76.76A2.56 2.56 0 0018 12.28V5.57A2.58 2.58 0 0015.4 3H5.12l1 1h9.28c.9 0 1.6.71 1.6 1.57v6.7z"/>
</svg>

  );
}
export default CommentOffIcon;