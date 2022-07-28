
import { splitProps, ComponentProps, JSX } from "solid-js";

function TableFreezeColumnAndRowIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17 14.5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9zM4 8v4h3V8H4zm0 5v1.5c0 .78.6 1.42 1.36 1.5H7v-3H4zm4-1h4V8H8v4zm4 4v-3H8v3h4zM4 5.5V7h9v9h1.5c.78 0 1.42-.6 1.5-1.36V5.5c0-.78-.6-1.42-1.36-1.5H5.5c-.78 0-1.42.6-1.5 1.36v.14z"/>
</svg>

  );
}
export default TableFreezeColumnAndRowIcon;