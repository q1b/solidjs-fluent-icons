
import { splitProps, ComponentProps, JSX } from "solid-js";

function PeopleMoneyIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.5 5.75a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM6.75 2.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM10 10a2 2 0 01.7.13c-.48.16-.9.47-1.2.87h-6a1 1 0 00-1 1v.16l.06.33c.07.27.2.64.45 1C3.49 14.2 4.5 15 6.75 15c.95 0 1.69-.14 2.25-.37v1.06c-.61.2-1.36.31-2.25.31-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 01-.68-1.99V12c0-1.1.9-2 2-2H10zm3-3.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM14.5 4a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM10 12.5c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-3zm1 0v1c.83 0 1.5-.67 1.5-1.5h-1a.5.5 0 01-.5.5zm7 1v-1a.5.5 0 01-.5-.5h-1c0 .83.67 1.5 1.5 1.5zM16.5 16h1c0-.28.22-.5.5-.5v-1c-.83 0-1.5.67-1.5 1.5zM11 14.5v1c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5zm3.5 1a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
</svg>

  );
}
export default PeopleMoneyIcon;