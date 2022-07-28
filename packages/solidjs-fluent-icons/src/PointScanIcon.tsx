
import { splitProps, ComponentProps, JSX } from "solid-js";

function PointScanIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.5 2c.28 0 .5.22.5.5v4.02A5 5 0 0113.48 11h4.02a.5.5 0 010 1h-4.02A5 5 0 019 16.48v1.02a.5.5 0 01-1 0v-1.02A5 5 0 013.52 12H2.5a.5.5 0 010-1h1.02A5 5 0 018 6.52V2.5c0-.28.22-.5.5-.5zM4.53 12A4 4 0 008 15.47V12H4.53zM8 11V7.53A4 4 0 004.53 11H8zm1 1v3.47A4 4 0 0012.47 12H9zm3.47-1A4 4 0 009 7.53V11h3.47z"/>
</svg>

  );
}
export default PointScanIcon;