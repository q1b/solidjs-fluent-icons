
import { splitProps, ComponentProps, JSX } from "solid-js";

function SyringeIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14.15 2.15c.2-.2.5-.2.7 0l3 3a.5.5 0 01-.7.7l-.4-.4-1.8 1.8 1.9 1.9a.5.5 0 01-.7.7L15 8.71l-5.56 5.56a2.5 2.5 0 01-1.77.73H5.71l-2.86 2.85a.5.5 0 01-.7-.7L5 14.29v-1.96c0-.66.26-1.3.73-1.77L11.3 5l-1.14-1.15a.5.5 0 01.7-.7l1.9 1.9 1.8-1.8-.4-.4a.5.5 0 010-.7zM10 7.7l-.8.79.65.65a.5.5 0 01-.7.7l-.65-.64-.8.79.65.65a.5.5 0 01-.7.7L7 10.71l-.56.56A1.5 1.5 0 006 12.33V14h1.67c.4 0 .78-.16 1.06-.44L14.3 8 12 5.7 10.7 7l.65.65a.5.5 0 01-.7.7L10 7.71zm6.04-2.96l-.79-.8-1.8 1.8.8.8 1.8-1.8z"/>
</svg>

  );
}
export default SyringeIcon;