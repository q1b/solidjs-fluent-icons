
import { splitProps, ComponentProps, JSX } from "solid-js";

function BackspaceIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.15 7.15c.2-.2.5-.2.7 0L12 9.29l2.15-2.14a.5.5 0 01.7.7L12.71 10l2.14 2.15a.5.5 0 01-.7.7L12 10.71l-2.15 2.14a.5.5 0 01-.7-.7L11.29 10 9.15 7.85a.5.5 0 010-.7zM6.59 4.66A2.5 2.5 0 018.29 4h7.21A2.5 2.5 0 0118 6.5v7a2.5 2.5 0 01-2.5 2.5H8.28a2.5 2.5 0 01-1.7-.66l-3.78-3.5a2.5 2.5 0 010-3.68l3.79-3.5zm1.7.34c-.38 0-.75.14-1.03.4L3.48 8.9a1.5 1.5 0 000 2.2l3.78 3.5c.28.26.65.4 1.02.4h7.22c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5H8.28z"/>
</svg>

  );
}
export default BackspaceIcon;