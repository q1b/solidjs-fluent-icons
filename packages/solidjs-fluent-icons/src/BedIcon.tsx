
import { splitProps, ComponentProps, JSX } from "solid-js";

function BedIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13.5 3A2.5 2.5 0 0116 5.34v2.71a2.5 2.5 0 012 2.28v6.17a.5.5 0 01-1 .09V14H3v2.5a.5.5 0 01-1 .09V10.5a2.5 2.5 0 012-2.45V5.5A2.5 2.5 0 016.34 3h7.16zm2 6h-11c-.78 0-1.42.6-1.5 1.36V13h14v-2.5c0-.78-.6-1.42-1.36-1.5h-.14zm-2-5h-7c-.78 0-1.42.6-1.5 1.36V8h1v-.5c0-.28.22-.5.5-.5H9c.28 0 .5.22.5.5V8h1v-.5c0-.28.22-.5.5-.5h2.5c.28 0 .5.22.5.5V8h1V5.5c0-.78-.6-1.42-1.36-1.5h-.14z"/>
</svg>

  );
}
export default BedIcon;