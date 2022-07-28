
import { splitProps, ComponentProps, JSX } from "solid-js";

function TextIndentDecreaseLtrIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 4.5c0-.28.22-.5.5-.5h8a.5.5 0 110 1h-8a.5.5 0 01-.5-.5zM3.56 7.73a.5.5 0 01.7.7L3.22 9.5l1.06 1.06a.5.5 0 11-.7.7l-1.42-1.4a.5.5 0 010-.71l1.41-1.42zM6.5 9a.5.5 0 000 1h11a.5.5 0 100-1h-11zM6 14.5c0-.28.22-.5.5-.5h6a.5.5 0 110 1h-6a.5.5 0 01-.5-.5z"/>
</svg>

  );
}
export default TextIndentDecreaseLtrIcon;