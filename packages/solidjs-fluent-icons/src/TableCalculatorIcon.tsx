
import { splitProps, ComponentProps, JSX } from "solid-js";

function TableCalculatorIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17H11v-1H8v-3h3v-1H8V8h4v.5c.3-.22.63-.38 1-.45V8h4V5.5zm-13 9V13h3v3H5.36A1.5 1.5 0 014 14.5zM12 7H8V4h4v3zm1-3H14.64A1.5 1.5 0 0116 5.5V7h-3V4zM4 7V5.36A1.5 1.5 0 015.5 4H7v3H4zm3 1v4H4V8h3zm5 2.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-7zm2.5 2.5h-1a.5.5 0 000 1h1a.5.5 0 000-1zm3.5.5a.5.5 0 00-.5-.5h-1a.5.5 0 000 1h1a.5.5 0 00.5-.5zM14.5 15h-1a.5.5 0 000 1h1a.5.5 0 000-1zm3.5.5a.5.5 0 00-.5-.5h-1a.5.5 0 000 1h1a.5.5 0 00.5-.5zM14.5 17h-1a.5.5 0 000 1h1a.5.5 0 000-1zm3.5.5a.5.5 0 00-.5-.5h-1a.5.5 0 000 1h1a.5.5 0 00.5-.5zM13.5 10a.5.5 0 00-.5.5v1c0 .28.22.5.5.5h4a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-4z"/>
</svg>

  );
}
export default TableCalculatorIcon;