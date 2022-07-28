
import { splitProps, ComponentProps, JSX } from "solid-js";

function NextIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17 3.5a.5.5 0 10-1 0v13a.5.5 0 001 0v-13zM3 4.25c0-1 1.12-1.6 1.95-1.04l8.5 5.71c.73.5.73 1.57 0 2.07l-8.5 5.8A1.25 1.25 0 013 15.75V4.25zm1.39-.2a.25.25 0 00-.39.2v11.5c0 .2.23.32.4.2l8.49-5.78a.25.25 0 000-.42l-8.5-5.7z"/>
</svg>

  );
}
export default NextIcon;