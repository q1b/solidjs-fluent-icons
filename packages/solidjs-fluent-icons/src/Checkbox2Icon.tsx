
import { splitProps, ComponentProps, JSX } from "solid-js";

function Checkbox2Icon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h7.05c.06-.3.18-.63.4-1H6a2 2 0 01-2-2V6c0-1.1.9-2 2-2h8a2 2 0 012 2v5c.35 0 .69.06 1 .17V6a3 3 0 00-3-3H6zm7.85 4.85a.5.5 0 00-.7-.7L8.5 11.79l-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l5-5zM15.93 13c-.3.02-.67.16-1.05.6a.5.5 0 11-.76-.65c.54-.61 1.15-.91 1.76-.95.6-.03 1.14.2 1.52.57.38.36.63.88.59 1.43-.04.57-.38 1.1-.99 1.45-1.1.64-1.6 1.2-1.82 1.55h2.32a.5.5 0 110 1h-3a.5.5 0 01-.5-.45 1.43 1.43 0 01.03-.34c.04-.19.12-.42.28-.7a5.8 5.8 0 012.2-1.93c.36-.21.47-.46.48-.65a.84.84 0 00-.28-.64c-.2-.19-.48-.3-.78-.29z"/>
</svg>

  );
}
export default Checkbox2Icon;