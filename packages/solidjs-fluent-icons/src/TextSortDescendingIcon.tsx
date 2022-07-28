
import { splitProps, ComponentProps, JSX } from "solid-js";

function TextSortDescendingIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 2a.5.5 0 000 1h3.07L3.58 8.22A.5.5 0 004 9h4a.5.5 0 100-1H4.93l3.49-5.22A.5.5 0 008 2H4zm2.47 8.32a.5.5 0 00-.94 0l-2.75 7a.5.5 0 10.94.36L4.38 16h3.24l.66 1.68a.5.5 0 00.94-.36l-2.75-7zM6 11.87L7.23 15H4.77L6 11.87zM14.5 2c.28 0 .5.22.5.5v13.8l2.15-2.15a.5.5 0 01.7.7l-3 3a.5.5 0 01-.7 0l-3-3a.5.5 0 01.7-.7L14 16.29V2.5c0-.28.22-.5.5-.5z"/>
</svg>

  );
}
export default TextSortDescendingIcon;