
import { splitProps, ComponentProps, JSX } from "solid-js";

function TableFreezeColumnIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.5 17A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9zM12 4H8v3h4V4zM7 4H5.5c-.78 0-1.42.6-1.5 1.36V7h3V4zm1 4v4h4V8H8zm-4 4h3V8H4v4zm4 1v3h4v-3H8zm-2.5 3H7v-3H4v1.5c0 .78.6 1.42 1.36 1.5h.14zm9-12H13v12h1.5c.78 0 1.42-.6 1.5-1.36V5.5c0-.78-.6-1.42-1.36-1.5h-.14z"/>
</svg>

  );
}
export default TableFreezeColumnIcon;