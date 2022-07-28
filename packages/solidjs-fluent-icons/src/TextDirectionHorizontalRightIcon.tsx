
import { splitProps, ComponentProps, JSX } from "solid-js";

function TextDirectionHorizontalRightIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.5 3c.2 0 .4.13.47.32l3 8a.5.5 0 01-.94.36L8.03 9H4.97l-1 2.68a.5.5 0 01-.94-.36l3-8A.5.5 0 016.5 3zm0 1.92L5.35 8h2.3L6.5 4.92zm8.35-.77a.5.5 0 10-.7.7L15.29 6H10.5a.5.5 0 000 1h4.8l-1.15 1.15a.5.5 0 10.7.7l2-2a.5.5 0 000-.7l-2-2zm0 8a.5.5 0 00-.7.7L15.29 14H3.5a.5.5 0 000 1h11.8l-1.15 1.15a.5.5 0 00.7.7l2-2a.5.5 0 000-.7l-2-2z"/>
</svg>

  );
}
export default TextDirectionHorizontalRightIcon;